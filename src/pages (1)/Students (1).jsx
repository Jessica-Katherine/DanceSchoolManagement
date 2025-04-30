import React, { useEffect, useState } from 'react';
import { getEnrolledStudents } from '../storage/studentStorage';

function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    setStudents(getEnrolledStudents());
  }, []);

  return (
    <div className="container mt-5">
      {/* Header Image */}
      <div className="text-center mb-4">
        <img
          src="/beau1.png" 
          alt="Happy Students"
          style={{ maxHeight: '300px', objectFit: 'cover' }}
        />
      </div>

      {/* Heading */}
      <h2 className="text-center text-dark  mb-4">Our Enrolled Stars 🌟</h2>

      {/* Student List */}
      {students.length === 0 ? (
        <div className="alert alert-info text-center">No students enrolled yet. Be the first!</div>
      ) : (
        <div className="row justify-content-center">
          {students.map((s, i) => (
            <div key={i} className="col-md-6 col-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-danger">{s.name}</h5>
                  <p className="card-text mb-1"><strong>Email:</strong> {s.email}</p>
                  <p className="card-text"><strong>Class:</strong> {s.selectedClass}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Students;
