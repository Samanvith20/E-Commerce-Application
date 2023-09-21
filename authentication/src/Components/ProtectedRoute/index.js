import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ children }) => {
  const token = Cookies.get('jwt_token');

  if (!token) {
    // Redirect to the login page if token is not found
    return <Navigate to="/login" />;
  }

  // Render the children (protected content)
  return children;
};

export default ProtectedRoute;
