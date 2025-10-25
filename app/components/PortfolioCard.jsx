"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PortfolioCard = ({ portfolio = {} }) => {
  const router = useRouter();
  const [imageError, setImageError] = useState(false);

  const {
    id = "unknown",
    name = "Anonymous",
    profilePhoto = "",
    professionalTitle = "Developer",
    shortDescription = "No description available.",
    location = "Unknown",
    skills = [],
    featured = false,
    projects = [],
    socialMedia = []
  } = portfolio;

  const imageSrc = imageError || !profilePhoto
    ? "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    : profilePhoto;

  const handleView = () =>
    id !== "unknown" && id
      ? router.push(`/portfolio/${id}`)
      : alert("Portfolio unavailable");

  const handleEdit = () => {
    if (id !== "unknown" && id) {
      router.push(`/portfolio/edit/${id}`);
    } else {
      alert("Cannot edit this portfolio");
    }
  };

  return (
    <div
      style={{
        background: "white",
        borderRadius: "16px",
        border: "2px solid #e8eeff",
        overflow: "hidden",
        transition: "all 0.3s ease",
        position: "relative"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,255,0.12)";
        e.currentTarget.style.borderColor = "#0000ff";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.borderColor = "#e8eeff";
      }}
    >
   
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "4px",
        background: "linear-gradient(90deg, #0000ff 0%, #0066ff 100%)"
      }} />

     
      <div className="p-4">
        <div className="d-flex align-items-start gap-3 mb-3">
          <div style={{
            position: "relative",
            flexShrink: 0
          }}>
            <div style={{
              width: "60px",
              height: "60px",
              borderRadius: "14px",
              overflow: "hidden",
              border: "3px solid #e8eeff",
              background: "#f8faff"
            }}>
              <Image
                src={imageSrc}
                alt={name}
                width={60}
                height={60}
                onError={() => setImageError(true)}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
            {featured && (
              <div style={{
                position: "absolute",
                top: "-8px",
                right: "-8px",
                width: "24px",
                height: "24px",
                background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
                border: "2px solid white"
              }}>
                ⭐
              </div>
            )}
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <h6 className="fw-bold mb-1 text-truncate" style={{
              color: "#1a1a1a",
              fontSize: "1.1rem"
            }}>
              {name}
            </h6>
            <p className="mb-1 text-muted small">
              {professionalTitle}
            </p>
            {location && (
              <div className="d-flex align-items-center gap-1 text-muted" style={{ fontSize: "0.8rem" }}>
                <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span>{location}</span>
              </div>
            )}
          </div>
        </div>

        <p className="text-muted mb-3" style={{
          fontSize: "0.9rem",
          lineHeight: "1.6",
          minHeight: "42px"
        }}>
          {shortDescription.length > 85 ? shortDescription.slice(0, 82) + "…" : shortDescription}
        </p>

      
        {skills.length > 0 && (
          <div className="d-flex flex-wrap gap-2 mb-3">
            {skills.slice(0, 3).map((skill, i) => (
              <span
                key={i}
                style={{
                  background: "#f0f4ff",
                  color: "#0000ff",
                  padding: "4px 12px",
                  borderRadius: "12px",
                  fontSize: "0.75rem",
                  fontWeight: "600",
                  border: "1px solid #d8e2ff"
                }}
              >
                {skill}
              </span>
            ))}
            {skills.length > 3 && (
              <span style={{
                background: "#0000ff",
                color: "white",
                padding: "4px 10px",
                borderRadius: "12px",
                fontSize: "0.75rem",
                fontWeight: "600"
              }}>
                +{skills.length - 3}
              </span>
            )}
          </div>
        )}

        <div className="d-flex align-items-center gap-3 mb-3 pb-3" style={{
          borderBottom: "1px solid #e8eeff"
        }}>
          {projects.length > 0 && (
            <div className="d-flex align-items-center gap-1" style={{ fontSize: "0.85rem", color: "#666" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none">
                <path d="M19 11H5m14-7v2m-2 4v6m-3-6V7a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/>
              </svg>
              <span>{projects.length} Projects</span>
            </div>
          )}
          {socialMedia.length > 0 && (
            <div className="d-flex align-items-center gap-1" style={{ fontSize: "0.85rem", color: "#666" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none">
                <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
              </svg>
              <span>{socialMedia.length} Links</span>
            </div>
          )}
        </div>

        
        <div className="d-flex gap-2">
          <button
            onClick={handleView}
            disabled={!id || id === "unknown"}
            style={{
              flex: 1,
              background: id && id !== "unknown" 
                ? "linear-gradient(135deg, #0000ff 0%, #0066ff 100%)" 
                : "#e8eeff",
              color: id && id !== "unknown" ? "white" : "#999",
              border: "none",
              borderRadius: "10px",
              padding: "12px 20px",
              fontSize: "0.9rem",
              fontWeight: "600",
              cursor: id && id !== "unknown" ? "pointer" : "not-allowed",
              transition: "all 0.3s ease",
              boxShadow: id && id !== "unknown" ? "0 4px 12px rgba(0,0,255,0.2)" : "none"
            }}
            onMouseEnter={(e) => {
              if (id && id !== "unknown") {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 6px 16px rgba(0,0,255,0.3)";
              }
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = id && id !== "unknown" ? "0 4px 12px rgba(0,0,255,0.2)" : "none";
            }}
          >
            View Portfolio
          </button>
          
          <button
            onClick={handleEdit}
            disabled={!id || id === "unknown"}
            style={{
              background: id && id !== "unknown" 
                ? "linear-gradient(135deg, #10b981 0%, #059669 100%)" 
                : "#d1fae5",
              color: id && id !== "unknown" ? "white" : "#999",
              border: "none",
              borderRadius: "10px",
              padding: "12px 16px",
              cursor: id && id !== "unknown" ? "pointer" : "not-allowed",
              transition: "all 0.3s ease",
              boxShadow: id && id !== "unknown" ? "0 4px 12px rgba(16,185,129,0.2)" : "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
            onMouseEnter={(e) => {
              if (id && id !== "unknown") {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 6px 16px rgba(16,185,129,0.3)";
              }
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = id && id !== "unknown" ? "0 4px 12px rgba(16,185,129,0.2)" : "none";
            }}
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
