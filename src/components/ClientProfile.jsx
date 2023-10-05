// src/components/ClientProfile.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { updateClientProfile } from '../redux/clientActions';\
import { updateClientProfile } from 'redux/customerActions';

const ClientProfile = () => {
  const dispatch = useDispatch();
  const client = useSelector((state) => state.client);

  const [editedProfile, setEditedProfile] = useState({ ...client });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile({
      ...editedProfile,
      [name]: value,
    });
  };

  const handleSaveChanges = () => {
    dispatch(updateClientProfile(editedProfile));
  };

  return (
    <div className="container mx-auto mt-4">
      <div className="bg-white p-4 shadow-md rounded-lg">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold">Client Profile</h2>
          <button
            className="bg-blue-500 text-white px-2 py-1 rounded-md"
            onClick={handleSaveChanges}
          >
            Save Changes
          </button>
        </div>
        <hr className="my-4" />
        <div className="flex items-center">
          <div className="w-16 h-16 relative">
            <img
              src={editedProfile.profilePic}
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-full cursor-pointer">
              <span className="text-white text-sm">Edit</span>
            </div>
          </div>
          <div className="ml-4">
            <input
              type="text"
              name="name"
              value={editedProfile.name}
              onChange={handleInputChange}
              className="border rounded-md px-2 py-1"
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              value={editedProfile.email}
              onChange={handleInputChange}
              className="border rounded-md px-2 py-1 mt-2"
              placeholder="Email"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientProfile;
