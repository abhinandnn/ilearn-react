import React from 'react';
import './login.css';
import logImg from '../../../assets/log.svg'
import { useState } from 'react';
import { Link } from 'react-router-dom';
function ForgotPassword() {
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
          ...error,
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
    
    //   return { handleChange, inputs, handleSubmit, error };
  return (
    <>
    <div className='sidestrip'>
    <img className='log' src={logImg}/>
    </div>
    <div className='login_section'>
      <div className='login-statement' id="forgorlog">
      Forgot Password?
      <div className='login-statement1'id='forgotlog'>
        Log in to your account by providing your account email below!
      </div>
      <form onSubmit={handleSubmit}> 
      <div className='form'>
       <div className="input-login">
    <input type="email"
    name='email'
    maxLength={100}
    placeholder='Enter Email'
    value={inputs.email}
    onChange={handleChange}
    style={{ border: error.email ? "2px solid red" : "2px solid black"}}
    required /> 
    <label className={error.email ? "error-label":""}>Email</label>
    <span className="error-message" style={{color:"red"}}>{error.email}</span>
   </div>
   <Link to={'/otp'}><button className='logButton'>Next</button></Link>
   </div>
   </form>
      </div>
      </div>
      </>
      )
}

export default ForgotPassword