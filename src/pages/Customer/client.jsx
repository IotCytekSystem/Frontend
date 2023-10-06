// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ClientProfile from './components/ClientProfile';

function client() {
  return (
    <Provider store={store}>
      <div className="App">
        <ClientProfile />
      </div>
    </Provider>
  );
}

export default client;

