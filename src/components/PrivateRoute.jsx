import React from "react";
import { Navigate, Route } from "react-router-dom";

const PrivateRoute = ({ element, isAuth }) => {
  return isAuth ? (
    <Route element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
