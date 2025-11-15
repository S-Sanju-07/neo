import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Background Particles */}
      <div className="footer-particle"></div>
      <div className="footer-particle"></div>
      <div className="footer-particle"></div>
      <div className="footer-particle"></div>
      
      <div className="footer-content">
        <div className="footer-text">
          © {currentYear} Smart Study Planner. All rights reserved.
        </div>
        
        <div className="footer-links">
          <a href="/privacy" className="footer-link">Privacy Policy</a>
          <a href="/terms" className="footer-link">Terms of Service</a>
          <a href="/contact" className="footer-link">Contact</a>
          
          <div className="footer-social">
            <a href="#" className="social-icon" aria-label="Twitter">
              🐦
            </a>
            <a href="#" className="social-icon" aria-label="Facebook">
              📘
            </a>
            <a href="#" className="social-icon" aria-label="Instagram">
              📷
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;