// Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Business Name */}
        <div className="footer-section business">
          <span className="business-logo">●</span> 
          <span className="business-name">Business Name</span>
        </div>

        {/* Company Links */}
        <div className="footer-section">
          <h4>COMPANY</h4>
          <ul>
            <li>Home</li>
            <li>Smart Inventory Management</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Legal Links */}
        <div className="footer-section">
          <h4>LEGAL</h4>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Accessibility Statement</li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="footer-section">
          <h4>SOCIAL</h4>
          <ul>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>X</li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-section contact">
          <h4>CONTACT</h4>
          <ul>
            <li>info@mysite.com</li>
            <li>Tel: 123-456-7890</li>
            <li>500 Terry Francine St.</li>
            <li>San Francisco CA 94158</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        © 2035 by Ekak Innovations<span className="trademark">™</span>
      </div>
    </footer>
  );
}

export default Footer;
