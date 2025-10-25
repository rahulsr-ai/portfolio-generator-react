"use client";
import React from "react";

const TestimonialsSection = ({ data }) => {
  const { testimonials = [] } = data;
  const validTestimonials = testimonials.filter(t => t.name && t.quote);
  if (!validTestimonials.length) return null;

  return (
    <section style={{ background: '#f8f9fa', padding: 'clamp(60px, 10vw, 100px) 0' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', color: '#1a1a1a' }}>
            What Clients Say
          </h2>
          <div style={{ width: '60px', height: '4px', background: '#0000ff', margin: '0 auto' }} />
        </div>

        <div className="row g-4">
          {validTestimonials.map((testimonial, i) => (
            <div key={i} className="col-md-6 col-lg-4">
              <div style={{ background: '#fff', padding: '30px', borderRadius: '16px', border: '2px solid #e0e0e0', height: '100%', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#0000ff'; e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,255,0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e0e0e0'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ marginBottom: '20px' }}>
                  <path d="M10 20c0-3.5 2-6 5-7 1.5-.5 3-.5 4 0-1.5 1-2 2.5-2 4.5 0 2.5 1.5 4 3.5 4s3.5-1.5 3.5-4c0-4.5-3-8.5-8.5-8.5C10 9 6 13 6 20s4 11 9.5 11c2.5 0 4.5-1 6-2.5l-2-2c-1 1-2.5 1.5-4 1.5-3.5 0-5.5-2.5-5.5-6zm16 0c0-3.5 2-6 5-7 1.5-.5 3-.5 4 0-1.5 1-2 2.5-2 4.5 0 2.5 1.5 4 3.5 4s3.5-1.5 3.5-4c0-4.5-3-8.5-8.5-8.5C26 9 22 13 22 20s4 11 9.5 11c2.5 0 4.5-1 6-2.5l-2-2c-1 1-2.5 1.5-4 1.5-3.5 0-5.5-2.5-5.5-6z" fill="#0000ff" opacity="0.2"/>
                </svg>
                <p className="text-muted mb-4" style={{ fontSize: '1rem', lineHeight: '1.7', fontStyle: 'italic' }}>
                  "{testimonial.quote}"
                </p>
                <div style={{ borderTop: '2px solid #f0f0f0', paddingTop: '15px' }}>
                  <h6 className="fw-bold mb-0" style={{ color: '#0000ff', fontSize: '1rem' }}>
                    {testimonial.name}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
