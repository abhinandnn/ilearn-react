
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loginStatus,setLogin]=useState(false)

  const login = (token, username, role) => {
    setUser({ token, username, role });
    setLogin(true)
  };

  const logout = () => {
    setUser(null);
    setLogin(false)
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loginStatus}}>
      {children}
    </AuthContext.Provider>
  );
};
