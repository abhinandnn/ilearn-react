
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from '../../api/axios';
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loginStatus,setLogin]=useState(false)
  const getData = async (config) => {
    try {
      console.log("loading")
      const response = await  axios.get('/',config);
      setUser(response.data.user);
      setLogin(true);
      console.log(response.data.user);
    } catch (error) {
      console.log('err_',error.response.status);
      if(error.response&&error.response.status==401)
      logout();
    }
  };
  const login = (token) => {
  localStorage.setItem("authId",token);
  const config = { headers: {'Authorization':`Bearer ${token}`}, withCredentials: false }
        getData(config);
  };

  const logout = () => {
    setUser(null);
    setLogin(false);
    localStorage.removeItem('authId')
  };
  const confi = { headers: {'Authorization':`Bearer ${localStorage.getItem('authId')}`}, withCredentials: false }
 
  useEffect(() => {
    getData(confi);
  },[]);
  console.log('hi',user);

  return (
    <AuthContext.Provider value={{ user, login, logout, loginStatus}}>
      {children}
    </AuthContext.Provider>
  );
};
