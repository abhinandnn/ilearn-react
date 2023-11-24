
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from '../../api/axios';
import { useNavigate } from 'react-router-dom';
const AuthContext = createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
const navigate=useNavigate();
const config = { headers: {'Authorization':`Bearer ${localStorage.getItem('authId')}`}, withCredentials: false }
  const [user, setUser] = useState();
  const [loginStatus,setLogin]=useState(false)
  const getData = async () => {
    try {
      console.log("loading")
      const response = await  axios.get('/',config);
      setUser(response.data.user);
      setLogin(true);
      console.log(response.data.user);
    } catch (error) {
      console.log('err_',error.response.status);
      if(error.response)
      logout();
    }
  };
  const login = (token) => {
  localStorage.setItem("authId",token);
  };

  const logout = () => {
    setUser(null);
    setLogin(false);
    localStorage.removeItem('authId')
    navigate('/login')
  };
 
  useEffect(() => {
    getData();
  },[]);

  return (
    <AuthContext.Provider value={{ user, login, logout, loginStatus}}>
      {children}
    </AuthContext.Provider>
  );
};
