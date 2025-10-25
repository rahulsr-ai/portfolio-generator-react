"use client";
import React, { useState } from "react";

const ContactSection = ({ data }) => {
  const { contactMsg = "Let's work together!", contactEmail = "", contactPhoneNo = "" } = data;
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus({ type: 'success', message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section style={{ background: 'linear-gradient(135deg, #0000ff 0%, #0000cc 100%)', padding: 'clamp(60px, 10vw, 100px) 0', color: 'white' }}>
      <div className="container">
        <div className="col-lg-10 mx-auto">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Get In Touch
            </h2>
            <div style={{ width: '60px', height: '4px', background: 'white', margin: '0 auto 30px' }} />
            <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', opacity: 0.95, maxWidth: '600px', margin: '0 auto' }}>
              {contactMsg}
            </p>
          </div>

          <div className="row g-4">
            <div className="col-lg-5">
              <h4 className="fw-bold mb-4">Contact Info</h4>
              
              {contactEmail && (
                <div className="mb-3 p-4" style={{ background: 'rgba(255,255,255,0.15)', borderRadius: '16px', border: '2px solid rgba(255,255,255,0.25)' }}>
                  <div className="d-flex align-items-center gap-3">
                    <div style={{ width: '50px', height: '50px', background: 'white', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="24" height="24" fill="none" stroke="#0000ff" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <h6 className="fw-bold mb-1">Email</h6>
                      <p className="mb-0 small" style={{ wordBreak: 'break-all' }}>{contactEmail}</p>
                    </div>
                  </div>
                </div>
              )}

              {contactPhoneNo && (
                <div className="p-4" style={{ background: 'rgba(255,255,255,0.15)', borderRadius: '16px', border: '2px solid rgba(255,255,255,0.25)' }}>
                  <div className="d-flex align-items-center gap-3">
                    <div style={{ width: '50px', height: '50px', background: 'white', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="24" height="24" fill="none" stroke="#0000ff" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Phone</h6>
                      <p className="mb-0">{contactPhoneNo}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="col-lg-7">
              <div style={{ background: 'white', padding: 'clamp(30px, 5vw, 40px)', borderRadius: '20px' }}>
                <h4 className="fw-bold mb-4" style={{ color: '#1a1a1a' }}>Send Message</h4>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label fw-medium" style={{ color: '#1a1a1a', fontSize: '0.95rem' }}>Name</label>
                    <input type="text" name="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required className="form-control" style={{ padding: '14px 18px', borderRadius: '10px', border: '2px solid #e8eeff' }} placeholder="Your name" />
                  </div>

                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label className="form-label fw-medium" style={{ color: '#1a1a1a', fontSize: '0.95rem' }}>Email</label>
                      <input type="email" name="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required className="form-control" style={{ padding: '14px 18px', borderRadius: '10px', border: '2px solid #e8eeff' }} placeholder="your@email.com" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-medium" style={{ color: '#1a1a1a', fontSize: '0.95rem' }}>Phone</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="form-control" style={{ padding: '14px 18px', borderRadius: '10px', border: '2px solid #e8eeff' }} placeholder="+1 234 567 8900" />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-medium" style={{ color: '#1a1a1a', fontSize: '0.95rem' }}>Message</label>
                    <textarea name="message" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required rows="5" className="form-control" style={{ padding: '14px 18px', borderRadius: '10px', border: '2px solid #e8eeff', resize: 'vertical' }} placeholder="Your message..." />
                  </div>

                  {status.message && (
                    <div className={`alert ${status.type === 'success' ? 'alert-success' : 'alert-danger'} mb-3`} style={{ borderRadius: '10px', fontSize: '0.9rem' }}>
                      {status.message}
                    </div>
                  )}

                  <button type="submit" disabled={loading} className="btn w-100" style={{ background: 'linear-gradient(135deg, #0000ff 0%, #0066ff 100%)', color: 'white', border: 'none', borderRadius: '12px', padding: '16px', fontWeight: '600', fontSize: '1rem' }}>
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
