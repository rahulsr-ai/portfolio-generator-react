"use client";
import React from "react";

const ServicesSection = ({ data }) => {
  const { services = [] } = data;
  const validServices = services.filter(s => s.title);
  if (!validServices.length) return null;

  return (
    <section style={{ background: '#f8f9fa', padding: 'clamp(60px, 10vw, 100px) 0' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', color: '#1a1a1a' }}>
            Services
          </h2>
          <div style={{ width: '60px', height: '4px', background: '#0000ff', margin: '0 auto' }} />
        </div>

        <div className="row g-4">
          {validServices.map((service, i) => (
            <div key={i} className="col-md-6 col-lg-4">
              <div style={{ background: 'white', padding: '40px 30px', borderRadius: '16px', border: '2px solid #e0e0e0', height: '100%', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#0000ff'; e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,255,0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e0e0e0'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                <div style={{ width: '60px', height: '60px', background: '#f0f4ff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <svg width="28" height="28" fill="none" stroke="#0000ff" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <h5 className="fw-bold mb-3" style={{ fontSize: '1.3rem', color: '#1a1a1a' }}>
                  {service.title}
                </h5>
                <p className="text-muted mb-0" style={{ lineHeight: '1.7' }}>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
