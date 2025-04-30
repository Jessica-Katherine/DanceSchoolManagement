import React from 'react';
import { motion } from 'framer-motion';

function Schedule() {
  return (
    <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center mt-5 px-3 px-lg-5">
      
      {/* Left - Dancer animation */}
      <motion.img
        src="/tree1.gif"
        alt="Dancer 1"
        className="img-fluid mb-4 mb-lg-0"
        style={{ maxWidth: '500px' }}
        initial={{ y: -10 }}
        animate={{ y: 10 }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
      />

      {/* Right - Table and heading */}
      <div className="bg-white p-4 rounded shadow-lg" style={{ width: '100%', maxWidth: '600px' }}>
        <h2 className="text-center mb-4 text-danger" style={{ fontWeight: 'bold' }}>
          Weekly Class Schedule 🗓️
        </h2>
        <div className="table-responsive">
          <table className="table table-hover table-bordered align-middle text-center">
            <thead className="table-danger">
              <tr>
                <th>Day</th>
                <th>Time</th>
                <th>Class</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monday</td>
                <td>5 PM - 6 PM</td>
                <td>Bharatanatyam </td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td>6 PM - 7 PM</td>
                <td>Break Dance</td>
              </tr>
              <tr>
                <td>Saturday</td>
                <td>10 AM - 11 AM</td>
                <td>Salsa</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
