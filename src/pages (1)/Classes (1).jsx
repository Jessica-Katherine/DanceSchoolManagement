import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Assuming App.css is in src/

function Classes() {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Our Dance Classes 🩰</h2>

      <div className="row justify-content-center g-4">
        {[
          {
            title: "Bharatanatyam",
            desc: "A graceful introduction to classical Bharatanatyam.",
            img: "/bharatanatyam1.jpg",
          },
          {
            title: "Break Dance",
            desc: "High-energy street dance with cool freezes.",
            img: "/hip hop 3.jpg",
          },
          {
            title: "Salsa Dance",
            desc: "Fun Latin dance with simple steps and playful twirls .",
            img: "/salsa2a.jpg",
          },
        ].map((cls, index) => (
          <div className="col-12 col-sm-6 col-md-4" key={index}>
            <div className="card class-card h-100">
              <div className="card-img-container">
                <img
                  src={cls.img}
                  alt={cls.title}
                  className="card-img-top class-image"
                />
              </div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{cls.title}</h5>
                <p className="card-text">{cls.desc}</p>
                <Link to="/enroll" className="btn btn-outline-danger mt-auto">
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Classes;
