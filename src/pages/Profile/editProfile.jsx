// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ClientProfile from './components/ClientProfile';

function editProfile() {
  return (
    <Provider store={store}>
      <div className="Profile">
      <p>user </p>
        <ClientProfile />
      </div>
    </Provider>
  );
}

export default editProfile;

