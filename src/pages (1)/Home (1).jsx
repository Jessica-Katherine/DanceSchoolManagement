import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center bg-light overflow-hidden position-relative">
      {/* Animated Heading */}
      <motion.h1
        className="display-3 mb-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{
          color: 'pink',
          fontFamily: '"Quicksand", sans-serif', 
          zIndex: 1,
          textShadow: '2px 2px 5px rgba(0,0,0,0.5)',
        }}
      >
        Welcome to Spark Dance Academy
      </motion.h1>

      {/* Animated Subheading */}
      <motion.p
        className="lead mb-5 text-center px-3"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
        style={{ color: 'white', zIndex: 1, fontSize: '1.5rem' }}
      >
        Dive into the world of classical and contemporary dance with us!
      </motion.p>


      {/* CTA Buttons */}
      <div className="d-flex gap-3 mb-5" style={{ zIndex: 1 }}>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/loginsignup" className="btn btn-danger btn-lg">
            Enroll Now
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/classes" className="btn btn-danger btn-lg">
            View Classes
          </Link>
        </motion.div>
      </div>

      {/* Animated Dancer GIFs */}
      <motion.img
        src="/output-onlinegiftools.gif"
        alt="Dancer 1"
        className="position-absolute"
        style={{ top: '35%', left: '-2%', width: '600px', zIndex: 1 }}
        initial={{ y: -20 }}
        animate={{ y: 20 }}
        transition={{ yoyo: Infinity, duration: 3, ease: 'easeInOut' }}
      />
      <motion.img
        src="/image-removebg-preview.png"
        alt="Dancer 2"
        className="position-absolute"
        style={{ bottom: '5%', left: '60%', width: '700px', zIndex: 1 }}
        initial={{ x: 30 }}
        animate={{ x: -30 }}
        transition={{ yoyo: Infinity, duration: 4, ease: 'easeInOut' }}
      />

      {/* Animated Gradient Overlay */}
      <div className="animate-gradient" />
    </div>
  );
}

export default Home;
