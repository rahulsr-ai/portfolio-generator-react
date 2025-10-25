"use client";
import React from "react";
import Image from "next/image";

const ProjectsSection = ({ data }) => {
  const { projects = [] } = data;
  const validProjects = projects.filter(p => p.title);
  if (!validProjects.length) return null;

  const fallbackImage = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=350&fit=crop";

  return (
    <section id="projects" style={{ background: '#fff', padding: 'clamp(60px, 10vw, 100px) 0' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', color: '#1a1a1a' }}>
            My Projects
          </h2>
          <div style={{ width: '60px', height: '4px', background: '#0000ff', margin: '0 auto' }} />
        </div>

        <div className="row g-4">
          {validProjects.map((project, i) => (
            <div key={i} className="col-md-6 col-lg-4">
              <div style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', border: '2px solid #e0e0e0', transition: 'all 0.3s', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#0000ff'; e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,255,0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e0e0e0'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                <div style={{ height: '220px', overflow: 'hidden' }}>
                  <Image src={project.image || fallbackImage} alt={project.title} width={500} height={220} className="w-100 h-100" style={{ objectFit: 'cover' }} onError={(e) => { e.target.src = fallbackImage; }} />
                </div>
                <div style={{ padding: '25px' }}>
                  <h5 className="fw-bold mb-2" style={{ fontSize: '1.2rem', color: '#1a1a1a' }}>
                    {project.title}
                  </h5>
                  <p className="text-muted mb-0" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
