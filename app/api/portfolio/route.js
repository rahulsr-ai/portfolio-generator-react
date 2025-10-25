import connectDB from "../../../lib/db";
import userInfo from "../../../model/UserInfo"
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectDB();

  
    const portfolios = await userInfo.find({});

    if (portfolios.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "No portfolios found",
        },
        { status: 404 } 
      );
    }

    return NextResponse.json({
      success: true,
      count: portfolios.length,
      data: portfolios,
    });
    
  } catch (error) {
    console.error("Error fetching portfolios:", error);
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
