"use client";
import React from "react";
import Image from "next/image";

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

  return (
    <section style={{ 
      background: '#fff', 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center',
      padding: '40px 0'
    }}>
      <div className="container">
        <div className="row align-items-center g-5">
        
          <div className="col-lg-6 order-2 order-lg-1">
            <div style={{ paddingRight: '0' }} className="pe-lg-4">
            
              <div 
                className="d-inline-block mb-3"
                style={{
                  background: '#f0f0ff',
                  padding: '8px 20px',
                  borderRadius: '20px',
                  border: '1px solid #e0e0ff'
                }}
              >
                <span style={{ 
                  fontSize: '0.9rem', 
                  fontWeight: '600',
                  color: '#0000ff'
                }}>
                  👋 Welcome
                </span>
              </div>

              <h1 className="fw-bold mb-3" style={{ 
                fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', 
                lineHeight: '1.2',
                color: '#1a1a1a'
              }}>
                I Am <span style={{ color: '#0000ff' }}>{title}</span>
                <span style={{ color: '#0000ff' }}></span>
              </h1>
              
              <div className="mb-4">
                <p className="text-dark mb-2" style={{ 
                  fontSize: 'clamp(1rem, 2vw, 1.2rem)', 
                  fontWeight: '500'
                }}>
                  Hi, I&apos;m <span style={{ color: '#0000ff', fontWeight: '700' }}>{name}</span>
                </p>
                {tagline && (
                  <p className="text-muted mb-2" style={{ 
                    fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', 
                    lineHeight: '1.7'
                  }}>
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
              
              <div className="d-flex gap-3 flex-wrap">
                {socialMedia.length > 0 && socialMedia[0]?.url && (
                  <a 
                    href={socialMedia[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn px-4 py-3"
                    style={{
                      background: '#0000ff',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      fontWeight: '600',
                      fontSize: '0.95rem',
                      boxShadow: '0 4px 14px rgba(0,0,255,0.3)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#0000dd';
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 6px 20px rgba(0,0,255,0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = '#0000ff';
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 4px 14px rgba(0,0,255,0.3)';
                    }}
                  >
                    Download CV
                  </a>
                )}
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn px-4 py-3"
                  style={{
                    background: 'white',
                    color: '#555',
                    borderRadius: '8px',
                    fontWeight: '600',
                    fontSize: '0.95rem',
                    border: '2px solid #e0e0e0',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#f5f5f5';
                    e.target.style.borderColor = '#0000ff';
                    e.target.style.color = '#0000ff';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'white';
                    e.target.style.borderColor = '#e0e0e0';
                    e.target.style.color = '#555';
                  }}
                >
                  Learn more
                </button>
              </div>

          
              <div className="row mt-5 g-4 d-none d-lg-flex">
                <div className="col-4">
                  <h3 className="fw-bold mb-0" style={{ color: '#0000ff', fontSize: '2rem' }}>5+</h3>
                  <p className="text-muted small mb-0">Years Experience</p>
                </div>
                <div className="col-4">
                  <h3 className="fw-bold mb-0" style={{ color: '#0000ff', fontSize: '2rem' }}>50+</h3>
                  <p className="text-muted small mb-0">Projects Done</p>
                </div>
                <div className="col-4">
                  <h3 className="fw-bold mb-0" style={{ color: '#0000ff', fontSize: '2rem' }}>30+</h3>
                  <p className="text-muted small mb-0">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 order-1 order-lg-2">
            <div className="position-relative">
             
              <div 
                className="d-none d-lg-block"
                style={{
                  position: 'absolute',
                  top: '40px',
                  right: '0',
                  width: '85%',
                  height: 'calc(100% - 40px)',
                  background: '#0000ff',
                  borderRadius: '20px',
                  zIndex: 1
                }}
              />
              
             
              <div 
                className="position-relative" 
                style={{ 
                  zIndex: 2,
                  maxWidth: '550px',
                  margin: '0 auto'
                }}
              >
                <div
                  style={{
                    background: '#fff',
                    padding: 'clamp(12px, 2vw, 20px)',
                    borderRadius: '20px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.15)'
                  }}
                >
                  <Image
                    src={profileImageUrl || fallbackImage}
                    alt={`${name}'s profile`}
                    width={550}
                    height={650}
                    className="w-100"
                    style={{ 
                      objectFit: 'cover',
                      borderRadius: '16px',
                      height: 'auto',
                      maxHeight: '650px'
                    }}
                    onError={(e) => {
                      e.target.src = fallbackImage;
                    }}
                    priority
                  />
                </div>

                {/* Floating badge */}
                <div 
                  className="d-none d-lg-block"
                  style={{
                    position: 'absolute',
                    bottom: '30px',
                    left: '-30px',
                    background: 'white',
                    padding: '20px 30px',
                    borderRadius: '12px',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                    zIndex: 3
                  }}
                >
                  <div className="d-flex align-items-center gap-3">
                    <div 
                      style={{
                        width: '50px',
                        height: '50px',
                        background: '#0000ff',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold" style={{ fontSize: '1rem' }}>Available</h6>
                      <small className="text-muted">For Hire</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
