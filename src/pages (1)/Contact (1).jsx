import React from 'react';

function Contact() {
  return (
    <div className="container mt-5">
      <h2 className="text-center text-white mb-4" style={{ fontSize: '2rem' }}>Contact Us 📞</h2>

      <div className="card shadow-sm p-4 bg-danger text-white">
        <p style={{ fontSize: '1.5rem' }}><strong>Email:</strong> support@sparkdanceacademy.com</p>
        <p style={{ fontSize: '1.5rem' }}><strong>Phone:</strong> +91 98765 43210</p>
        <p style={{ fontSize: '1.5rem' }}><strong>Address:</strong> 123, Dance Street, Chennai, Tamil Nadu</p>
      </div>
    </div>
  );
}

export default Contact;
