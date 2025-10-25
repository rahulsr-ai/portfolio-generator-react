"use client";
import React from "react";

const ServicesSection = ({ data }) => {
  const { services = [] } = data;
  
  const validServices = services.filter(service => service.title);

  if (!validServices.length) return null;

  return (
    <section style={{ background: '#f8f9fa', padding: '80px 0' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3" style={{ fontSize: '2.5rem', color: '#1a1a1a' }}>
            My Services 
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

        <div className="row g-4">
          {validServices.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div 
                style={{
                  background: '#fff',
                  padding: '40px 30px',
                  borderRadius: '12px',
                  height: '100%',
                  transition: 'all 0.3s ease',
                  border: '2px solid transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#0000ff';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,255,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div 
                  className="mb-4"
                  style={{
                    width: '70px',
                    height: '70px',
                    background: '#0000ff',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <svg width="32" height="32" fill="white" viewBox="0 0 24 24">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                
                <h5 className="fw-bold mb-3" style={{ fontSize: '1.3rem', color: '#1a1a1a' }}>
                  {service.title}
                </h5>
                <p className="text-muted mb-0" style={{ lineHeight: '1.7' }}>
                  {service.description || "Service description not available."}
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
