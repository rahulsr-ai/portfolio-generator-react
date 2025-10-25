import connectDB from "../../../../../lib/db";
import userInfo from "../../../../../model/UserInfo";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  try {
    const portfolioData = await request.json();
    const { id } = await params;

    console.log("Updating portfolio with ID:", id);

    await connectDB();

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Portfolio ID is required" },
        { status: 400 }
      );
    }

   
    const socialMediaArray = [];
    if (portfolioData.socials) {
      Object.entries(portfolioData.socials).forEach(([platform, url]) => {
        if (url) socialMediaArray.push({ platform, url });
      });
    }


    const formattedProjects = portfolioData.projects
      ? portfolioData.projects.map(project => ({
          title: project.title,
          description: project.description,
          image: project.imageUrl,
        }))
      : [];

   
    const formattedTestimonials = portfolioData.testimonials?.map(t => ({
      name: t.name,
      quote: t.quote,
    })) || [];

    const formattedBlogs = portfolioData.blogs?.map(b => ({
      title: b.title,
      summary: b.summary,
    })) || [];

  
    const updatedUser = await userInfo.findByIdAndUpdate(
      id,
      {
        template: portfolioData.template,
        name: portfolioData.name,
        title: portfolioData.title,
        tagline: portfolioData.tagline,
        profileImageUrl: portfolioData.profileImageUrl,
        bio: portfolioData.bio,
        phone: portfolioData.phone ? parseInt(portfolioData.phone) : undefined,
        location: portfolioData.location,
        socialMedia: socialMediaArray,
        contactMsg: portfolioData.contactMessage,
        contactEmail: portfolioData.contactEmail,
        contactPhoneNo: portfolioData.contactPhone ? parseInt(portfolioData.contactPhone) : undefined,
        skills: portfolioData.skills || [],
        services: portfolioData.services || [],
        testimonials: formattedTestimonials,
        blogs: formattedBlogs,
        projects: formattedProjects,
      },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return NextResponse.json(
        { success: false, message: "Portfolio not found" },
        { status: 404 }
      );
    }

    console.log("Portfolio updated:", updatedUser);

    return NextResponse.json({
      success: true,
      message: "Portfolio updated successfully",
      data: {
        id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
      },
    });
  } catch (error) {
    console.error("Portfolio update error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
        error: process.env.NODE_ENV === "development" ? error.message : "Something went wrong",
      },
      { status: 500 }
    );
  }
}
