import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ element,path}) => {
  const { loginStatus } = useAuth();
  
  return loginStatus ? (
    {element}
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;
