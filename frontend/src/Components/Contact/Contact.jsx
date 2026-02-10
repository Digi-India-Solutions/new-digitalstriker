import React, { useEffect, useState } from 'react';
import { User, Mail, Phone, MessageSquare, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="ds-contact-page">
      {/* Hero Header Section */}
      <div className="ds-contact-hero">
        <div className="ds-container">
          <h1>Get In Touch</h1>
          <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>
      </div>

      <div className="ds-container">
        <div className="ds-contact-card">
          {/* Left Side: Info & Branding */}
          <div className="ds-contact-sidebar">
            <div className="ds-sidebar-content">
              <h2>Why Contact Us?</h2>
              <p>Our team is ready to help you with technical solutions, project management, and operational support.</p>
              
              <div className="ds-mini-features">
                <div className="ds-feature-item">
                  <div className="ds-icon-circle"><MessageSquare size={20} /></div>
                  <span>Expert Consultation</span>
                </div>
                <div className="ds-feature-item">
                  <div className="ds-icon-circle"><Send size={20} /></div>
                  <span>Fast Response Time</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="ds-contact-form-area">
            <div className="ds-form-header">
              <h2>Contact Us</h2>
              <div className="ds-underline"></div>
            </div>

            <form className="ds-form">
              <div className="ds-input-wrapper">
                <User className="ds-input-icon" size={20} />
                <input type="text" placeholder="Your Name" required />
              </div>

              <div className="ds-input-wrapper">
                <Mail className="ds-input-icon" size={20} />
                <input type="email" placeholder="Email Address" required />
              </div>

              <div className="ds-input-wrapper">
                <Phone className="ds-input-icon" size={20} />
                <input type="text" placeholder="Phone Number" required />
              </div>

              <div className="ds-input-wrapper ds-textarea-wrapper">
                <MessageSquare className="ds-input-icon" size={20} />
                <textarea placeholder="How can we help you?" required></textarea>
              </div>

              <button type="submit" className="ds-submit-btn">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;