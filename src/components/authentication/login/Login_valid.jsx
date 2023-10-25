import React, { useState } from "react";

const Login_valid = () =>{
const [inputs, setInputs] = useState({
    email:"",
    password:""
});
const [error,setError]  =  useState({
    email:"",
    password:""
})
const email_valid= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const handleChange = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
    setError( {
      email: !email_valid.test(inputs.email.trim())? 'Enter a valid email' : '',
    })
      
  };
  const handleSubmit = e => {
    e.preventDefault();
    
      let hasErrors = false;
      for (const i in error) {
        if (error[i] !== '') {
          hasErrors = true;
        }
      }
  
      if (!hasErrors) {
        console.log('Form submitted:', inputs);
        localStorage.setItem("loginemail",inputs.email);
      }
      else
      console.log('fill all the details correctly!',error);
  };

  return { handleChange, inputs, handleSubmit, error };
};

export default Login_valid;