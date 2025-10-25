import connectDB from "../../../../lib/db";
import userInfo from "../../../../model/UserInfo";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const portfolioData = await request.json();
    
    console.log("Received portfolio data:", portfolioData);
    
    await connectDB();

    // Check email uniqueness
    const existingUser = await userInfo.findOne({
      email: portfolioData.email.toLowerCase()
    });

    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "use a different email address or phone number" },
        { status: 400 }
      );
    }

  
    const socialMediaArray = [];
    if (portfolioData.socials) {
      Object.entries(portfolioData.socials).forEach(([platform, url]) => {
        if (url && url.trim()) {
          socialMediaArray.push({ platform, url });
        }
      });
    }

   
    const formattedProjects = portfolioData.projects
      ?.filter(p => p.title && p.title.trim())
      .map(p => ({
        title: p.title,
        description: p.description || '',
        image: p.imageUrl || '',
      })) || [];

  
    const formattedTestimonials = portfolioData.testimonials
      ?.filter(t => t.name && t.name.trim() && t.quote && t.quote.trim())
      .map(t => ({
        name: t.name.trim(),
        quote: t.quote.trim(),
      })) || [];

    console.log("✅ Formatted testimonials:", formattedTestimonials);

  
    const formattedBlogs = portfolioData.blogs
      ?.filter(b => b.title && b.title.trim() && b.summary && b.summary.trim())
      .map(b => ({
        title: b.title.trim(),
        summary: b.summary.trim(),
      })) || [];

    console.log("✅ Formatted blogs:", formattedBlogs);

   
    const formattedServices = portfolioData.services
      ?.filter(s => s.title && s.title.trim() && s.description && s.description.trim())
      .map(s => ({
        title: s.title.trim(),
        description: s.description.trim(),
      })) || [];



    // Create portfolio
    const newUser = await userInfo.create({
      template: portfolioData.template,
      name: portfolioData.name,
      title: portfolioData.title,
      tagline: portfolioData.tagline,
      profileImageUrl: portfolioData.profileImageUrl,
      bio: portfolioData.bio,
      email: portfolioData.email,
      phone: portfolioData.phone,
      location: portfolioData.location,
      socialMedia: socialMediaArray,
      contactMsg: portfolioData.contactMessage,
      contactEmail: portfolioData.contactEmail,
      contactPhoneNo: portfolioData.contactPhone,
      skills: portfolioData.skills || [],
      services: formattedServices,
      testimonials: formattedTestimonials,  
      blogs: formattedBlogs,                 
      projects: formattedProjects,
    });

    console.log("New user created:", newUser);

    return NextResponse.json({
      success: true,
      message: "Portfolio created successfully",
      data: { 
        id: newUser._id,
       
      }
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
