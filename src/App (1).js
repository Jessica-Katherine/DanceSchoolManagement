import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Classes from './pages/Classes';
import Enroll from './pages/Enroll';
import LoginSignup from './pages/LoginSignup';
import Students from './pages/Students';
import Schedule from './pages/Schedule';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Careers from './pages/Careers';
import FAQs from './pages/FAQs';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const pageStyle = {
    backgroundColor: isHomePage ? '#ffffff' : '#ff6778',
    minHeight: '100vh',
  };

  return (
    <div className="d-flex flex-column min-vh-100" style={pageStyle}>
      <Navbar />
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/loginsignup" element={<LoginSignup />} />
          <Route path="/enroll" element={<Enroll />} />
          <Route path="/students" element={<Students />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
