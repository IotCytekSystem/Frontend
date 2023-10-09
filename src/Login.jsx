// src/Login.js
import React from 'react';
import { connect } from 'react-redux';
import { loginSuccess } from 'redux/customerActions';


const Login = ({ isAuthenticated, user, loginSuccess }) => {
  const handleLogin = () => {
    // Simulate a successful login
    const dummyUser = { username: 'dummyUser' };
    loginSuccess(dummyUser);
  };

  return (
    <div>
      <h1>Login Page</h1>
      {isAuthenticated ? (
        <div>
          <p>Welcome, {user.username}!</p>
          <button onClick={Login}>Logout</button>

          {/* <button onClick={LogOut}>Logout</button> */}
        </div>
      ) : (
        <div>
          <p>Please log in.</p>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.isAuthenticated,
  user: state.user,
});

const mapDispatchToProps = {
  loginSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
