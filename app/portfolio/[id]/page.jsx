"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

// Template 1 Components
import HeroSectionT1 from "../../components/portfolio/template1/HeroSection";
import AboutSectionT1 from "../../components/portfolio/template1/AboutSection";
import SkillsSectionT1 from "../../components/portfolio/template1/SkillsSection";
import ServicesSectionT1 from "../../components/portfolio/template1/ServicesSection";
import TestimonialsSectionT1 from "../../components/portfolio/template1/TestimonialsSection";
import BlogSectionT1 from "../../components/portfolio/template1/BlogSection";
import ProjectsSectionT1 from "../../components/portfolio/template1/ProjectsSection";
import ContactSectionT1 from "../../components/portfolio/template1/ContactSection";

// Template 2 Components
import HeroSectionT2 from "../../components/portfolio/template2/HeroSection";
import AboutSectionT2 from "../../components/portfolio/template2/AboutSection";
import SkillsSectionT2 from "../../components/portfolio/template2/SkillsSection";
import ServicesSectionT2 from "../../components/portfolio/template2/ServicesSection";
import TestimonialsSectionT2 from "../../components/portfolio/template2/TestimonialsSection";
import BlogSectionT2 from "../../components/portfolio/template2/BlogSection";
import ProjectsSectionT2 from "../../components/portfolio/template2/ProjectsSection";
import ContactSectionT2 from "../../components/portfolio/template2/ContactSection";

const PortfolioPage = () => {
  const params = useParams();
  const router = useRouter();
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPortfolioData = async () => {
    try {
      setLoading(true);
      setError(null);

      if (!params?.id) {
        alert("Portfolio ID is missing");
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/portfolio/${params.id}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          cache: 'no-store'
        }
      );

      const result = await response.json();

      if (!response.ok) {
        alert(result.message || "Failed to fetch portfolio");
      }

      if (result.success && result.data) {
        setPortfolioData(result.data);
      } else {
        alert("Portfolio data not found");
      }
    } catch (error) {
      console.error("Error fetching portfolio:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (params?.id) {
      fetchPortfolioData();
    } else {
      setError("Portfolio ID is missing");
      setLoading(false);
    }
  }, [params?.id]);

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 d-flex align-items-center justify-content-center">
        <div className="text-center">
          <div className="spinner-border text-primary mb-3" role="status" style={{ width: '3rem', height: '3rem' }}>
            <span className="visually-hidden">Loading...</span>
          </div>
          <h5 className="text-muted">Loading Portfolio...</h5>
        </div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 d-flex align-items-center justify-content-center">
        <div className="text-center">
          <div className="mb-4" style={{ fontSize: '4rem' }}>😕</div>
          <h3 className="h4 text-danger mb-3">Portfolio Not Found</h3>
          <p className="text-muted mb-4">{error}</p>
          <div className="d-flex gap-2 justify-content-center">
            <button onClick={() => router.back()} className="btn btn-outline-primary">
              Go Back
            </button>
            <button onClick={fetchPortfolioData} className="btn btn-primary">
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  const template = portfolioData?.template || "1";

  // Render Template 1
  if (template === "1") {
    return (
      <div className="min-h-screen" style={{ background: '#f8f9fa' }}>
        <HeroSectionT1 data={portfolioData} />
        <AboutSectionT1 data={portfolioData} />
        
        {portfolioData.skills && portfolioData.skills.length > 0 && (
          <SkillsSectionT1 data={portfolioData} />
        )}
        
        {portfolioData.services && portfolioData.services.length > 0 && (
          <ServicesSectionT1 data={portfolioData} />
        )}
        
        {portfolioData.testimonials && portfolioData.testimonials.length > 0 && (
          <TestimonialsSectionT1 data={portfolioData} />
        )}
        
        {portfolioData.projects && portfolioData.projects.length > 0 && (
          <ProjectsSectionT1 data={portfolioData} />
        )}
        
        {portfolioData.blogs && portfolioData.blogs.length > 0 && (
          <BlogSectionT1 data={portfolioData} />
        )}
        
        <ContactSectionT1 data={portfolioData} />
      </div>
    );
  }

  // Render Template 2
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSectionT2 data={portfolioData} />
      <AboutSectionT2 data={portfolioData} />
      
      {portfolioData.skills && portfolioData.skills.length > 0 && (
        <SkillsSectionT2 data={portfolioData} />
      )}
      
      {portfolioData.services && portfolioData.services.length > 0 && (
        <ServicesSectionT2 data={portfolioData} />
      )}
      
      {portfolioData.testimonials && portfolioData.testimonials.length > 0 && (
        <TestimonialsSectionT2 data={portfolioData} />
      )}
      
      {portfolioData.projects && portfolioData.projects.length > 0 && (
        <ProjectsSectionT2 data={portfolioData} />
      )}
      
      {portfolioData.blogs && portfolioData.blogs.length > 0 && (
        <BlogSectionT2 data={portfolioData} />
      )}
      
      <ContactSectionT2 data={portfolioData} />
    </div>
  );
};

export default PortfolioPage;
