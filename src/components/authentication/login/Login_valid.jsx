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

const email_valid= /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const handleChange = e => {
    if(e.target.name="email"&&!email_valid.test(e.target.value))
 { setError((error) =>{return {
      ...error,
      email: 'Enter a valid email'
    }})
  }
  else
  {
    setError((error) =>{return {
      ...error,
      email: ''
    }})
  }
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
        console.log(inputs.email)
        localStorage.setItem("loginemail",inputs.email);
      }
      else
      console.log('fill all the details correctly!',error);
  };

  return { handleChange, inputs, handleSubmit, error };
};

export default Login_valid;