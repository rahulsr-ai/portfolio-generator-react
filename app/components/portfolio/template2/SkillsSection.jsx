"use client";
import React from "react";

const SkillsSection = ({ data }) => {
  const { skills = [] } = data;
  if (!skills.length) return null;

  return (
    <section style={{ background: '#fff', padding: 'clamp(60px, 10vw, 100px) 0' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', color: '#1a1a1a' }}>
            Skills & Expertise
          </h2>
          <div style={{ width: '60px', height: '4px', background: '#0000ff', margin: '0 auto' }} />
        </div>

        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              {skills.map((skill, i) => (
                <div key={i} style={{ background: '#f0f4ff', border: '2px solid #e0e0ff', borderRadius: '25px', padding: '12px 28px', fontSize: '0.95rem', fontWeight: '600', color: '#0000ff', transition: 'all 0.3s', cursor: 'pointer' }} onMouseEnter={(e) => { e.target.style.background = '#0000ff'; e.target.style.color = 'white'; }} onMouseLeave={(e) => { e.target.style.background = '#f0f4ff'; e.target.style.color = '#0000ff'; }}>
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
