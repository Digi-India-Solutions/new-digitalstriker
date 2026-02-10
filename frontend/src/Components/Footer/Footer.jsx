import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  ChevronRight 
} from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="ds-footer">
      <div className="ds-footer-container">
        
        {/* Column 1: Quick Links */}
        <div className="ds-footer-col">
          <h3 className="ds-footer-title">Quick Links</h3>
          <ul className="ds-footer-links">
            <li><Link to="/"><ChevronRight size={16} /> Home</Link></li>
            <li><Link to="/about"><ChevronRight size={16} /> About Us</Link></li>
            <li><Link to="/presence"><ChevronRight size={16} /> Our Presence</Link></li>
            <li><Link to="/contact"><ChevronRight size={16} /> Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 2: Our Products */}
        <div className="ds-footer-col">
          <h3 className="ds-footer-title">Our Products</h3>
          <ul className="ds-footer-links">
            <li><Link to="/active-product"><ChevronRight size={16} /> Active Products</Link></li>
            <li><Link to="/passive-product"><ChevronRight size={16} /> Passive Products</Link></li>
            <li><Link to="/fiber-product"><ChevronRight size={16} /> Optical Fiber Tools</Link></li>
          </ul>
        </div>

        {/* Column 3: Get In Touch */}
        <div className="ds-footer-col">
          <h3 className="ds-footer-title">Get In Touch</h3>
          <div className="ds-contact-info">
            <div className="ds-contact-item">
              <MapPin size={20} className="ds-icon" />
              <p>E-148, Mangolpuri, Industrial Area, Phase -2, Pocket E, New Delhi - 110034</p>
            </div>
            <div className="ds-contact-item">
              <Phone size={20} className="ds-icon" />
              <p>8882494615 / 8447168967</p>
            </div>
            <div className="ds-contact-item">
              <Mail size={20} className="ds-icon" />
              <div className="ds-emails">
                <a href="mailto:info@digitalstriker.in">priyanka@digitalstriker.in</a>
                <a href="mailto:baijnath@digitalstriker.in">baijnath@digitalstriker.in</a>
                <a href="mailto:info@digitalstriker.in">info@digitalstriker.in</a>
                
              </div>
            </div>
          </div>
        </div>

        {/* Column 4: Follow On */}
        <div className="ds-footer-col">
          <h3 className="ds-footer-title">Follow On</h3>
          <div className="ds-social-icons">
            <a href="https://www.facebook.com/Digitalstrikerpvtltd" target="_blank" rel="noreferrer" className="ds-social-btn"><Facebook size={20} /></a>
            <a href="https://x.com/StrikerDigital" target="_blank" rel="noreferrer" className="ds-social-btn"><Twitter size={20} /></a>
            <a href="https://www.linkedin.com/in/digital-striker-442087381" target="_blank" rel="noreferrer" className="ds-social-btn"><Linkedin size={20} /></a>
            <a href="https://www.instagram.com/digitalstrikerpvtltd_official?igsh=MXF1bHJ0bjZtOHR1cQ==" target="_blank" rel="noreferrer" className="ds-social-btn"><Instagram size={20} /></a>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="ds-footer-bottom">
        <div className="ds-bottom-container">
          <p>© 2024 Digital Striker. All Right Reserved.</p>
          <p>Designed By <a href="https://digiindiasolutions.com/" target="_blank" rel="noreferrer">Digi Solution</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;