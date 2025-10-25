"use client";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import HeroAboutStep from "../components/Steps/HeroAboutStep";
import SkillsServicesStep from "../components/Steps/SkillsServicesStep";
import TestimonialsBlogStep from "../components/Steps/TestimonialsBlogStep";
import PortfolioContactStep from "../components/Steps/PortfolioContactStep";

const PortfolioForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [isUploading, setIsUploading] = useState(false);

  const [formData, setFormData] = useState({
    template: searchParams.get("template") || "1",
    name: "",
    title: "",
    tagline: "",
    profileImage: null,
    profileImageUrl: "",
    bio: "",
    email: "",
    phone: "",
    location: "",
    socials: {
      linkedin: "",
      github: "",
      twitter: "",
    },
    skills: [],
    services: [
      { title: "", description: "" },
      { title: "", description: "" },
      { title: "", description: "" },
    ],
    testimonials: [
      { name: "", quote: "" },
      { name: "", quote: "" },
      { name: "", quote: "" },
    ],
    blogs: [
      { title: "", summary: "" },
      { title: "", summary: "" },
      { title: "", summary: "" },
    ],
    projects: [
      { title: "", image: null, imageUrl: "", description: "" },
      { title: "", image: null, imageUrl: "", description: "" },
      { title: "", image: null, imageUrl: "", description: "" },
    ],
    contactMessage: "",
    contactEmail: "",
    contactPhone: "",
  });

  const steps = [
    { number: 1, title: "Hero & About", component: HeroAboutStep },
    { number: 2, title: "Skills & Services", component: SkillsServicesStep },
    {
      number: 3,
      title: "Testimonials & Blog",
      component: TestimonialsBlogStep,
    },
    {
      number: 4,
      title: "Portfolio & Contact",
      component: PortfolioContactStep,
    },
  ];


  // Cloudinary upload function
  const uploadToCloudinary = async (file) => {
    const cloudFormData = new FormData();
    cloudFormData.append("file", file);
    cloudFormData.append("upload_preset", "portfolio_uploads");

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: cloudFormData,
        }
      );

      if (!response.ok) {
        alert(response.statusText)
      }

      const data = await response.json();
      return data.secure_url;
    } catch (error) {
      console.error("Cloudinary upload error:", error);
      alert(error)
    }
  };

  const updateFormData = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsUploading(true);
    console.log("Form submitted:", formData);

    try {

      // Upload profile image to Cloudinary first
      let profileImageUrl = formData.profileImageUrl;
      if (formData.profileImage) {
        console.log("Uploading profile image...");
        profileImageUrl = await uploadToCloudinary(formData.profileImage);
        console.log("Profile image uploaded:", profileImageUrl);
      }

      // Upload project images to Cloudinary
      console.log("Uploading project images...");
      const updatedProjects = await Promise.all(
        formData.projects.map(async (project, index) => {
          let imageUrl = project.imageUrl;
          if (project.image) {
            console.log(`Uploading project ${index + 1} image...`);
            imageUrl = await uploadToCloudinary(project.image);
            console.log(`Project ${index + 1} image uploaded:`, imageUrl);
          }
          return {
            title: project.title,
            description: project.description,
            imageUrl: imageUrl,
          };
        })
      );

    
      const validTestimonials = formData.testimonials.filter(
        (t) => t.name && t.quote
      );
      const validBlogs = formData.blogs.filter((b) => b.title && b.summary);

      // final data for backend 
      const finalData = {
        template: formData.template,
        name: formData.name,
        title: formData.title,
        tagline: formData.tagline,
        profileImageUrl: profileImageUrl,
        bio: formData.bio,
        email: formData.email,
        phone: formData.phone,
        location: formData.location,
        socials: formData.socials,
        skills: formData.skills,
        services: formData.services,
        testimonials: validTestimonials,
        blogs: validBlogs,
        projects: updatedProjects,
        contactMessage: formData.contactMessage,
        contactEmail: formData.contactEmail,
        contactPhone: formData.contactPhone,
      };

      console.log("Sending final data to backend:", finalData);

      
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/portfolio/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(finalData),
        }
      );

      if (!response.ok) {
        alert(`${response.msg}`);
        
      }

      const data = await response.json();
      console.log("Portfolio created successfully:", data);

      alert("Portfolio created successfully!");
      router.push("/Portfolios");
    } catch (error) {
      console.error("Error creating portfolio:", error);
      alert(`Error creating portfolio: ${error.message}`);
    } finally {
      setIsUploading(false);
    }
  };

  const CurrentStepComponent = steps[currentStep - 1].component;

  return (
    <div className="min-h-screen bg-gray-50 py-4 px-4">
      <div className="max-w-6xl mx-auto">
      
        <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
          <div className="flex items-center justify-between mb-3">
            <h1 className="text-xl md:text-2xl font-bold text-gray-900">
              Create Your Portfolio
            </h1>
            <span className="text-sm text-gray-500">
              Step {currentStep} of {steps.length}
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex-1 bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / steps.length) * 100}%` }}
              />
            </div>

            <div className="flex space-x-2 md:space-x-4">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className={`flex items-center space-x-2 ${
                    step.number <= currentStep
                      ? "text-blue-600"
                      : "text-gray-400"
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${
                      step.number <= currentStep
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-400"
                    }`}
                  >
                    {step.number}
                  </div>
                  <span className="text-xs sm:text-sm hidden sm:block">
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-4 md:p-6">
          <CurrentStepComponent
            formData={formData}
            updateFormData={updateFormData}
          />

         
          <div className="flex justify-between mt-6 pt-4 border-t border-gray-200">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm md:text-base ${
                currentStep === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Previous
            </button>

            {currentStep === steps.length ? (
              <button
                onClick={handleSubmit}
                disabled={isUploading}
                className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm md:text-base flex items-center space-x-2 ${
                  isUploading
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : "bg-green-600 text-white hover:bg-green-700"
                }`}
              >
                {isUploading && (
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                )}
                <span>
                  {isUploading ? "Creating Portfolio..." : "Create Portfolio"}
                </span>
              </button>
            ) : (
              <button
                onClick={nextStep}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm md:text-base"
              >
                Next Step
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioForm;
