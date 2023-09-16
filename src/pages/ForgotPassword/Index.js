import { Button } from 'components';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code to handle the password reset request, e.g., sending a reset email.
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}> 
        <Link to="/ResetPassword"></Link>
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;
