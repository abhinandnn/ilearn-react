import React from 'react';
import { Route, Navigate,useLocation } from 'react-router-dom';
import {useAuthProcess} from './AuthProcessContext'

const ProtectedRoute1 = ({children}) => {
    const { isSubmit } = useAuthProcess();
    let location = useLocation();

    if(!isSubmit) {
        return <Navigate to="/login" state={{ from: location}} replace />
    }
 return children
}
export default ProtectedRoute1;
