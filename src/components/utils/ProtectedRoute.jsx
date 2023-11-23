import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({children}) => {
    const { loginStatus } = useAuth();
    let location = useLocation();
    console.log(loginStatus)
    if(!loginStatus) {
        return <Navigate to="/login" state={{ from: location}} replace />
    }
 return children
}
export default ProtectedRoute;
