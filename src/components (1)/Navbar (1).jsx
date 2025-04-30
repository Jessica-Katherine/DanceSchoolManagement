import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark px-3">
      <Link className="navbar-brand text-white d-flex align-items-center" to="/">
        <img 
          src='/dlogo5.png'
          alt="Dance Logo" 
          width="40" 
          height="40" 
          className="d-inline-block align-text-top me-2"
        />
        Spark Dance Academy
      </Link>

      <button 
        className="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav"
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><Link className="nav-link text-white" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link text-white" to="/classes">Classes</Link></li>
          <li className="nav-item"><Link className="nav-link text-white" to="/students">Students</Link></li>
          <li className="nav-item"><Link className="nav-link text-white" to="/schedule">Schedule</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
