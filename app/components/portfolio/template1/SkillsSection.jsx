"use client";
import React from "react";

const SkillsSection = ({ data }) => {
  const { skills = [] } = data;

  if (!skills.length) return null;

  return (
    <section style={{ background: '#fff', padding: '80px 0' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3" style={{ fontSize: '2.5rem', color: '#1a1a1a' }}>
            My Skills
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

        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  style={{
                    background: '#f8f9fa',
                    border: '2px solid #e0e0e0',
                    borderRadius: '25px',
                    padding: '12px 28px',
                    fontSize: '0.95rem',
                    fontWeight: '500',
                    color: '#1a1a1a',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#0000ff';
                    e.target.style.color = 'white';
                    e.target.style.borderColor = '#0000ff';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = '#f8f9fa';
                    e.target.style.color = '#1a1a1a';
                    e.target.style.borderColor = '#e0e0e0';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
