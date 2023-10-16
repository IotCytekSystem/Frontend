import React from 'react';
import 'tailwindcss/tailwind.css';
import video from "../assets/videos/cytek.mp4"
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="relative h-screen">
      {/* Video Background */}
      <video
        className="w-full h-full object-cover absolute top-0 left-0 z-0"
        autoPlay
        loop
        muted
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-extrabold text-white-A700 text-center">Welcome to Our Website</h1>
        <p className="mt-4 text-xl text-white-A700 text-center">Discover amazing things with us.</p>
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300">
        <Link to="/login">Get Started </Link>
        
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
