import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Components/authguard';

const OAuthGuard = ({ children }) => {
    const { isAuthenticated } = useAuth();
  
    return isAuthenticated ? children : <Navigate to="/login" replace />;
  };
  
  export default OAuthGuard;
