// import React from 'react';
import React, { useState } from 'react'; // Import useState from 'react'
import { useSelector } from 'react-redux'; // Import useSelector
import Sidebar from './Sidebar';
import logo from "../assets/image/logo.png"
import profile from "../assets/image/profile.png"
import { Link } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

const ClientProfile = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  // Replace these with actual client data from your Redux store
  // const clientData = {
  //   name: 'John Doe',
  //   phone: '123-456-7890',
  //   email: 'johndoe@example.com',
  //   country:'Kenya',
  //   county:'Nairobi',
  //   town:'Westland',
  // };
  const user = useSelector((state) => state.user);
  const name = user.user.user?.name || '';
  const email= user.user.user?.email || '';
  const phone = user.user.user?.phone || '';
  const country = user.user.user?.country || '';
  const county = user.user.user?.county || '';
  const town = user.user.user?.town || '';
  console.log("user is: " + JSON.stringify(user.user));



  const handleViewSettings = () => {
    // Handle the "View Settings" action here
  };

  const handleLogout = () => {
    // Handle the "Log Out" action here
  };

  return (

<div className='bg-green-600'> 

<div className=' flex bg-blue-50 justify-between px-3 '>
      <div className=' p-2 flex align-middle'> 
      <div className="login-container  h-12 w-12 ">
<img src={logo} alt="Logo" className="logo  h-12 w-12"  />
</div>
      </div>
      <div className="ml-auto mt-2 relative">
      <img
        className="h-12 w-12 ml-auto cursor-pointer"
        src={profile}
        alt=""
        onClick={toggleDropdown}
      />
      {isDropdownOpen && (
        <div className="absolute top-12 right-0 bg-white-A700l border rounded shadow-md   ">
          <ul className=" flex flex-col  items-center bg-white-A700 p-1 w-[8vw] h-[12vh] justify-between">
            <li>
              <button onClick={handleViewSettings}>

              <Link to="/profile">Profile </Link>
              </button>
            </li>
            <li>
              <button onClick={handleLogout}>Log Out</button>
            </li>
          </ul>
        </div>
      )}
    </div>      
</div>
{/* <div className=' flex flex-row justify-between bg-red-900'>  */}

<div className="flex flex-row justify-between items-center bg-gray-100">
<div className='bg-blue-600 mt-[2px]'>
<Sidebar/>

</div>
      {/* <div className=" flex bg-white p-8 shadow-lg rounded-lg w-96"> */}
        <div className="flex flex-col items-center bg-white-A700  w-full h-screen ">
          <img
            src={profile}
            alt="Profile"
            className="w-32 h-32 rounded-full cursor-pointer p-2"
          />
          <div className=" items-center ml-10 space-y-8">
            <p className="text-2xl font-semibold"><span className='text-lg font-bold mr-2'>Name:</span>{name}</p>
            <p className="text-gray-600"><span className='text-lg font-bold mr-2'>Email:</span>{email}</p>
            <p className="text-gray-600"> <span className='text-lg font-bold mr-2'>PhoneNumber:</span>{phone}</p>
            <p className="text-gray-600"><span className='text-lg font-bold mr-2'>Country:</span>{country}</p>
            <p className="text-gray-600"><span className='text-lg font-bold mr-2'>County:</span>{county}</p>
            <p className="text-gray-600"><span className='text-lg font-bold mr-2'>Town:</span>{town}</p>


          </div>

          <div className="mt-4">
          <div
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-full cursor-pointer"
            
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
            <Link to="/edit_profile"> Edit Profile </Link>
          </div>
        </div>
        </div>
        
  
    </div>
</div>
// </div>
      
  
  );
}

export default ClientProfile;
