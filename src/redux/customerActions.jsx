// export const updateClientProfile = (data) => ({
//     type: 'UPDATE_CLIENT_PROFILE',
//     payload: data,
//   });


import React from 'react';
import { connect } from 'react-redux';

const Profile = ({ clientData }) => {
  return (
    <div className="flex flex-col items-center bg-white-A700  w-full h-screen">
      {/* ... Your existing JSX */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    clientData: state.profile,
  };
};

export default connect(mapStateToProps)(Profile);


export const loginSuccess = (user) => ({
  type: 'LOGIN_SUCCESS',
  payload: { user },
});

export const logout = () => ({
  type: 'LOGOUT',
});