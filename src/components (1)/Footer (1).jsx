import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-danger text-white py-2 mt-auto">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start">
        
        {/* Left - Links */}
        <div className="mb-2 mb-md-0">
          
          <Link to="/faqs" className="text-white me-3">FAQs</Link>
          <Link to="/contact" className="text-white me-3">Contact Us</Link>
          <Link to="/privacy" className="text-white">Privacy Policy</Link>
        </div>

        {/* Center - Social Icons */}
        <div className="mb-2 mb-md-0">
          <i className="fab fa-facebook-f text-white me-3"></i>
          <i className="fab fa-twitter text-white me-3"></i>
          <i className="fab fa-instagram text-white me-3"></i>
          <i className="fab fa-linkedin-in text-white"></i>
        </div>

        {/* Right - Copyright */}
        <div>
          <small>© 2025 Spark Dance Academy</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
