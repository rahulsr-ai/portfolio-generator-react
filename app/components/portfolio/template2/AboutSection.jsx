"use client";
import React from "react";

const AboutSection = ({ data }) => {
  const { bio = "", email = "", phone = "" } = data;

  return (
    <section id="about" style={{ background: '#f8f9fa', padding: 'clamp(60px, 10vw, 100px) 0' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', color: '#1a1a1a' }}>
            About Me
          </h2>
          <div style={{ width: '60px', height: '4px', background: '#0000ff', margin: '0 auto' }} />
        </div>

        <div className="row">
          <div className="col-lg-8 mx-auto">
            <p className="text-muted mb-5" style={{ fontSize: '1.1rem', lineHeight: '1.9', textAlign: 'center' }}>
              {bio}
            </p>

            <div className="row g-4">
              <div className="col-md-6">
                <div style={{ background: 'white', padding: '30px', borderRadius: '16px', border: '2px solid #e0e0e0', textAlign: 'center' }}>
                  <div style={{ width: '60px', height: '60px', background: '#f0f4ff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                    <svg width="28" height="28" fill="none" stroke="#0000ff" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <h6 className="fw-bold mb-2">Email</h6>
                  <p className="text-muted mb-0 small" style={{ wordBreak: 'break-all' }}>{email}</p>
                </div>
              </div>

              {phone && (
                <div className="col-md-6">
                  <div style={{ background: 'white', padding: '30px', borderRadius: '16px', border: '2px solid #e0e0e0', textAlign: 'center' }}>
                    <div style={{ width: '60px', height: '60px', background: '#f0f4ff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                      <svg width="28" height="28" fill="none" stroke="#0000ff" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                    </div>
                    <h6 className="fw-bold mb-2">Phone</h6>
                    <p className="text-muted mb-0">{phone}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
