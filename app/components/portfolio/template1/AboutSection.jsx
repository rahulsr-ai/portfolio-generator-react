"use client";
import React from "react";

const AboutSection = ({ data }) => {
  const {
    bio = "No bio available.",
    email = "",
    phone = "",
    name = "Developer"
  } = data;

  return (
    <section id="about" style={{ background: '#f8f9fa', padding: '80px 0' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            {/* Section Title */}
            <div className="text-center mb-5">
              <h2 className="fw-bold mb-3" style={{ fontSize: '2.5rem', color: '#1a1a1a' }}>
                About Me
              </h2>
              <div 
                style={{
                  width: '60px',
                  height: '4px',
                  background: '#0000ff',
                  margin: '0 auto'
                }}
              />
            </div>

            <div className="row align-items-start">
              {/* Bio Content */}
              <div className="col-lg-8 mb-4 mb-lg-0">
                <p className="text-muted mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                  {bio}
                </p>
                
                {/* Stats or highlights */}
                <div className="row g-4 mt-4">
                  <div className="col-md-6">
                    <div className="d-flex align-items-start">
                      <div 
                        className="me-3"
                        style={{
                          width: '50px',
                          height: '50px',
                          background: '#0000ff',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-1" style={{ fontSize: '1.1rem' }}>Available for Hire</h5>
                        <p className="text-muted mb-0 small">Ready for new opportunities</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="d-flex align-items-start">
                      <div 
                        className="me-3"
                        style={{
                          width: '50px',
                          height: '50px',
                          background: '#0000ff',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                          <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                        </svg>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-1" style={{ fontSize: '1.1rem' }}>Fast Response</h5>
                        <p className="text-muted mb-0 small">Quick turnaround time</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info Card */}
              <div className="col-lg-4">
                <div 
                  style={{
                    background: '#fff',
                    padding: '30px',
                    borderRadius: '12px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                  }}
                >
                  <h5 className="fw-bold mb-4">Contact Info</h5>
                  
                  {email && (
                    <div className="mb-3">
                      <div className="d-flex align-items-center mb-2">
                        <svg width="20" height="20" className="me-2" fill="none" stroke="#0000ff" viewBox="0 0 24 24" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                        <strong className="small">Email</strong>
                      </div>
                      <a href={`mailto:${email}`} className="text-decoration-none small" style={{ color: '#555' }}>
                        {email}
                      </a>
                    </div>
                  )}
                  
                  {phone && (
                    <div className="mb-3">
                      <div className="d-flex align-items-center mb-2">
                        <svg width="20" height="20" className="me-2" fill="none" stroke="#0000ff" viewBox="0 0 24 24" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                        </svg>
                        <strong className="small">Phone</strong>
                      </div>
                      <a href={`tel:${phone}`} className="text-decoration-none small" style={{ color: '#555' }}>
                        {phone}
                      </a>
                    </div>
                  )}

                  <a 
                    href={`mailto:${email}`}
                    className="btn w-100 mt-3"
                    style={{
                      background: '#0000ff',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '12px',
                      fontWeight: '600'
                    }}
                  >
                    Let&apos;s Talk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
