import React, { createContext, useContext, useState, useEffect } from 'react';

// Create AuthContext
const AuthContext = createContext();

// Hook to use AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider Component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token); // Update authentication status
  }, []); // Run once on mount

  const login = (token) => {
    localStorage.setItem('token', token);
    setIsAuthenticated(true); // Update state immediately after login
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false); // Update state immediately after logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
