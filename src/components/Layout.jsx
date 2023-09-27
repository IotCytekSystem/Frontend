// Layout.js

import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="main-content">{children}</div>
    </div>
  );
};

export default Layout;
