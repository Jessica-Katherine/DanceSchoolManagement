import React from 'react';

function FAQs() {
  return (
    <div className="container mt-5">
      <h2 className="text-center text-light mb-4" style={{ fontSize: '2rem' }}>Frequently Asked Questions 🙋‍♀️</h2>

      <div className="card shadow-sm p-4 bg-danger text-white">
        <ul className="list-unstyled">
          <li className="mb-4">
            <strong style={{ fontSize: '1.5rem' }}>Q: What age groups do you teach?</strong>
            <p style={{ fontSize: '1.2rem' }}>A: We teach students from 5 years old to adults!</p>
          </li>
          <li className="mb-4">
            <strong style={{ fontSize: '1.5rem' }}>Q: Do I need prior experience?</strong>
            <p style={{ fontSize: '1.2rem' }}>A: Nope! We have beginner-friendly batches.</p>
          </li>
          <li className="mb-4">
            <strong style={{ fontSize: '1.5rem' }}>Q: How can I enroll?</strong>
            <p style={{ fontSize: '1.2rem' }}>A: Simply head over to the Enroll page and pick your class!</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FAQs;
