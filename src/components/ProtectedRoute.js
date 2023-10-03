import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();
  if (!user) {
    return <Navigate to='/' />;
  }

  return children;
};

export default ProtectedRoute;