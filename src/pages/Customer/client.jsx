
import React,{useState} from 'react';
import { useSelector } from 'react-redux'; // Import useSelector
import profile from "../../assets/image/profile.png";
import axios from "../../axiosConfig"
import { Link } from 'react-router-dom';

const Profile = () => {
  // const clientData = useSelector((state) => state.profile); // Access Redux state
  const user = useSelector((state) => state.user);
  const name = user?.id || '';
  const email= user?.id || '';
  const phone = user?.id || '';
  const country = user?.id || '';
  const county = user?.id || '';
  const town = user?.id || '';

  return (
    <div className="flex flex-col items-center bg-white-A700 w-full h-screen">
      <div className="flex flex-col items-center bg-white-A700 w-full h-screen">
        <img
          src={profile}
          alt="Profile"
          className="w-32 h-32 rounded-full cursor-pointer p-2"
        />
        <div className="items-center ml-10 space-y-8">
          <p className="text-2xl font-semibold">
            <span className='text-lg font-bold mr-2'>Name:</span>
            {name}
          </p>
          <p className="text-gray-600">
            <span className='text-lg font-bold mr-2'>Email:</span>
            {email}
          </p>
          <p className="text-gray-600">
            <span className='text-lg font-bold mr-2'>PhoneNumberbnhbvbnmn:</span>
            {phone}
          </p>
          <p className="text-gray-600">
            <span className='text-lg font-bold mr-2'>Country:</span>
            {country}
          </p>
          <p className="text-gray-600">
            <span className='text-lg font-bold mr-2'>County:</span>
            {county}
          </p>
          <p className="text-gray-600">
            <span className='text-lg font-bold mr-2'>Town:</span>
            {town}
          </p>
        </div>
        <div className="mt-4">
          <div
            className="bg-blue-500 hover-bg-blue-600 text-white font-semibold px-4 py-2 rounded-full cursor-pointer"
            
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline-block mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 21a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2h5l2 2h3a2 2 0 012 2v11z"
              />
            </svg>
            <Link to="/edit_profile">Edit Profile</Link>

          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    clientData: state.profile,
  };
};

export default(mapStateToProps)(Profile);
