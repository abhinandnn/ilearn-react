import React, { useState } from "react";

const Signup_valid = () =>{
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
  };
  const handleSubmit = e => {
    e.preventDefault();
    setError( {
    email: !email_valid.test(inputs.email.trim())? 'Enter a valid email' : '',
    password: (inputs.password.trim() === '')? 'This field is required' : '',
  })
    
      let hasErrors = false;
      for (const i in error) {
        if (error[i] !== '') {
          hasErrors = true;
        }
      }
  
      if (!hasErrors) {
        console.log('Form submitted:', inputs);
      }
      else
      console.log('fill all the details correctly!',error);
  };

  return { handleChange, inputs, handleSubmit, error };
};

export default Signup_valid;