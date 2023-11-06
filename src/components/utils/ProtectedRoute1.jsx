import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import {useAuthProcess} from './AuthProcessContext'
import LoginOTP from '../authentication/login/LoginOTP';
const ProtectedRoute1 = ({ element:Element,...props}) => {
  const { isSubmit } = useAuthProcess();
  
  return isSubmit ? (
    <Element/>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute1;
