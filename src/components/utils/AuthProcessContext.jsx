
import React, { createContext, useContext, useState } from 'react';

const AuthProcessContext = createContext();

export const useAuthProcess = () => {
  return useContext(AuthProcessContext);
};

export const AuthProcessProvider = ({ children }) => {
  const [isSubmit,setSubmit]=useState(false);

  const doSubmit =()=> {
  setSubmit(true);
  };

  const unSubmit = () => {
    setSubmit(false);
  };

  return (
    <AuthProcessContext.Provider value={{ isSubmit, doSubmit,unSubmit}}>
      {children}
    </AuthProcessContext.Provider>
  );
};
