import React from 'react';


function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover opacity-60"
          autoPlay
          loop
          muted
        >
          <source src="/home/winnie/Downloads/VID-20231011-WA0073.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="relative z-10 p-10 bg-white bg-opacity-60 rounded-lg">
        <h1 className="text-4xl font-extrabold text-white-A700">Welcome to Our Site</h1>
        <p className="mt-4 text-lg text-white-A700">Watch our video and learn more.</p>
        <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Watch Video
       
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
