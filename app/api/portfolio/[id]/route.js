import connectDB from "../../../../lib/db";
import userInfo from "../../../../model/UserInfo";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    await connectDB();
    
    const { id } = await params;
    
    if (!id) {
      return NextResponse.json(
        {
          success: false,
          message: "Portfolio ID is required",
        },
        { status: 400 }
      );
    }

    const portfolio = await userInfo.findById(id);

    if (!portfolio) {
      return NextResponse.json(
        {
          success: false,
          message: "Portfolio not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: portfolio,
    });
    
  } catch (error) {
    console.error("Error fetching portfolio:", error);
    
  
    if (error.name === 'CastError') {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid portfolio ID format",
        },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { 
        success: false, 
        message: "Server Error",
        error: "Something went wrong"
      },
      { status: 500 }
    );
  }
}
