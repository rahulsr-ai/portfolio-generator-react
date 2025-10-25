"use client";
import React from "react";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaFacebook, FaLink } from "react-icons/fa";

const HeroSection = ({ data }) => {
  const {
    name = "Developer",
    title = "Full Stack Developer",
    tagline = "",
    profileImageUrl = "",
    location = "",
    socialMedia = []
  } = data;

  const fallbackImage = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop";

  const getIcon = (platform) => {
    const p = platform?.toLowerCase() || '';
    if (p.includes('linkedin')) return <FaLinkedin />;
    if (p.includes('github')) return <FaGithub />;
    if (p.includes('twitter')) return <FaTwitter />;
    if (p.includes('instagram')) return <FaInstagram />;
    if (p.includes('facebook')) return <FaFacebook />;
    return <FaLink />;
  };

  return (
    <section style={{ background: '#fff', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '80px 0' }}>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left - Text */}
          <div className="col-lg-6">
            <div className="pe-lg-4">
              <div className="d-inline-block px-3 py-2 mb-3" style={{ background: '#f0f4ff', borderRadius: '20px', border: '1px solid #e0e0ff' }}>
                <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#0000ff' }}>👋 Welcome</span>
              </div>

              <h1 className="fw-bold mb-3" style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', lineHeight: '1.2', color: '#1a1a1a' }}>
                I Am <span style={{ color: '#0000ff' }}>{title}</span>
                <span style={{ color: '#0000ff' }}></span>
              </h1>
              
              <div className="mb-4">
                <p className="text-dark mb-2" style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', fontWeight: '500' }}>
                  Hi, I&apos;m <span style={{ color: '#0000ff', fontWeight: '700' }}>{name}</span>
                </p>
                {tagline && (
                  <p className="text-muted mb-2" style={{ fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', lineHeight: '1.7' }}>
                    {tagline}
                  </p>
                )}
                {location && (
                  <p className="text-muted d-flex align-items-center" style={{ fontSize: '0.95rem' }}>
                    <svg width="16" height="16" className="me-2" fill="none" stroke="#666" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    {location}
                  </p>
                )}
              </div>
              
              <div className="d-flex gap-3 flex-wrap mb-4">
                {socialMedia.length > 0 && socialMedia[0]?.url && (
                  <a href={socialMedia[0].url} target="_blank" rel="noopener noreferrer" className="btn px-4 py-2" style={{ background: 'linear-gradient(135deg, #0000ff, #0066ff)', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '600', textDecoration: 'none' }}>
                    Get In Touch
                  </a>
                )}
                <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="btn px-4 py-2" style={{ background: 'transparent', color: '#0000ff', border: '2px solid #e0e0ff', borderRadius: '8px', fontWeight: '600' }}>
                  View Projects
                </button>
              </div>

              {socialMedia.length > 0 && (
                <div className="d-flex gap-2">
                  {socialMedia.slice(0, 5).map((social, i) => (
                    <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" style={{ width: '40px', height: '40px', background: '#f0f4ff', border: '1px solid #e0e0ff', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0000ff', fontSize: '1.1rem', textDecoration: 'none', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.target.style.background = '#0000ff'; e.target.style.color = 'white'; }} onMouseLeave={(e) => { e.target.style.background = '#f0f4ff'; e.target.style.color = '#0000ff'; }}>
                      {getIcon(social.platform)}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right - Image */}
          <div className="col-lg-6">
            <div className="position-relative" style={{ maxWidth: '450px', margin: '0 auto' }}>
              <div style={{ position: 'absolute', inset: '-20px', background: 'linear-gradient(135deg, #0000ff, #0066ff)', opacity: 0.1, borderRadius: '20px', filter: 'blur(30px)' }} />
              <div className="position-relative" style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,255,0.15)' }}>
                <Image src={profileImageUrl || fallbackImage} alt={name} width={450} height={550} className="w-100" style={{ objectFit: 'cover', height: 'auto' }} onError={(e) => { e.target.src = fallbackImage; }} priority />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
