"use client";
import React from "react";

const BlogSection = ({ data }) => {
  const { blogs = [] } = data;
  const validBlogs = blogs.filter(b => b.title && b.summary);
  if (!validBlogs.length) return null;

  return (
    <section style={{ background: '#fff', padding: 'clamp(60px, 10vw, 100px) 0' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', color: '#1a1a1a' }}>
            Recent Articles
          </h2>
          <div style={{ width: '60px', height: '4px', background: '#0000ff', margin: '0 auto' }} />
        </div>

        <div className="row g-4">
          {validBlogs.map((blog, i) => (
            <div key={i} className="col-md-6 col-lg-4">
              <div style={{ background: '#f8f9fa', padding: '30px', borderRadius: '16px', border: '2px solid #e0e0e0', height: '100%', transition: 'all 0.3s', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = '#0000ff'; e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,255,0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.background = '#f8f9fa'; e.currentTarget.style.borderColor = '#e0e0e0'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                <div style={{ width: '50px', height: '50px', background: '#0000ff', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                  </svg>
                </div>
                <h5 className="fw-bold mb-3" style={{ fontSize: '1.3rem', color: '#1a1a1a', lineHeight: '1.4' }}>
                  {blog.title}
                </h5>
                <p className="text-muted mb-0" style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
                  {blog.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
