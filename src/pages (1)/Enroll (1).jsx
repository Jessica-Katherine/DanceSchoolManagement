import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveStudent } from '../storage/studentStorage';
import { getCurrentUser } from '../storage/authStorage';


function Enroll() {
  const user = getCurrentUser(); 
  const [student, setStudent] = useState({
    name: '',
    email: '',
    selectedClass: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setStudent(prev => ({
        ...prev,
        name: user.name || '',
        email: user.email || '',
      }));
    }
  }, [user]);

  const handleChange = e => {
    const { name, value } = e.target;
    setStudent(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    saveStudent(student);
    alert('Successfully enrolled!');
    navigate('/students');
  };

  return (
    <div className="container mt-5 col-md-6">
      <h2>Enroll in a Class</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input
            name="name"
            type="text"
            className="form-control"
            value={student.name}
            readOnly
          />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            name="email"
            type="email"
            className="form-control"
            value={student.email}
            readOnly
          />
        </div>
        <div className="mb-3">
          <label>Select Class</label>
          <select
            name="selectedClass"
            className="form-select"
            value={student.selectedClass}
            onChange={handleChange}
            required
          >
            <option value="">-- Choose a Class --</option>
            <option value="Bharatanatyam">Bharatanatyam</option>
            <option value="Kuchipudi">Kuchipudi</option>
            <option value="Folk Fusion">Folk Fusion</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Enroll</button>
      </form>
    </div>
  );
}

export default Enroll;
