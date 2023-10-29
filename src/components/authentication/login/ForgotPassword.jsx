import React, { useState } from "react";
import './login.css';
import logImg from '../../../assets/log.svg'
import { useNavigate } from 'react-router-dom';
import axios from "../../../api/axios";
import { ToastContainer,toast } from 'react-toastify';
import { Link } from "react-router-dom";
const FORGOT_URL ='https://udemy-nx1v.onrender.com/forget-password'
const ForgotPassword = () =>{
const[email,setEmail]=useState("");
const [error,setError]  =  useState("");
const email_valid= /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9.-]{2,}$/;
const navigate=useNavigate();
  const handleChange = e => {
    setEmail(e.target.value);
    if(!email_valid.test(e.target.value)&&e.target.value!=="")
    setError('Enter a valid email')
    else
    setError("")
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    
      let hasErrors = false;
        if (error !== '') {
          hasErrors = true;
        }
      if (!hasErrors) {
        localStorage.setItem("forgetEmail",email);
        console.log(email);
  try{
    const response = await axios.post(FORGOT_URL,{email:email},
      {headers:{'Content-Type':'application/json; charset=utf-8',
    'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1M2NlYmU5NTRjNjBhMzViMGFmYTNmZSIsInVpZCI6IndUVDdRWGx6bCIsImlhdCI6MTY5ODQ5MjA5MCwiZXhwIjoxNjk4NjY0ODkwfQ.lrvu9UW2gdCSgDGL9mYFXCHtfurhXN72_xZHQIVuciI'},
        withCredentials: false});
        if(response.data.success)
        {
          toast.info("OTP sent successfully!")
          navigate('/forgot/otp')
        console.log(response.data.message);}
}catch(err){
if(err.response){
console.log('Server responded');
setError(err.response.data.message);
}
else
  console.log('No Server response');
}}}
  
  return (
    <>
    <div className='sidestrip'>
    <img className='log' src={logImg}/>
    </div>
    <div id="forgot_section" className='login_section'>
      <div className='loginStatement' id="forgorlog">
      Forgot Password?
      <div className='loginStatement1'id='forgotlog'>
        Log in to your account by providing your account email below!
      </div>
      <form onSubmit={handleSubmit}> 
      <div className='form'>
    <div className="input-login">
    <input type="email"
    name='email'
    maxLength={100}
    placeholder='Enter Email'
    onChange={handleChange}
    style={{ border: error ? "2px solid red" : "2px solid black"}}
    required /> 
    <label id="lb" className={error ? "error-label":""}>Email</label>
    <span className="error-message" style={{color:"red"}}>{error}</span>
    </div>
      <button className='logButton'>Next</button>
      <div id="forgotFooter" className='authFooter'>Need an account? <Link to={"/signup"}className='fort'>Sign up</Link></div>
   </div>
   </form>
      </div>
      </div>
      </>
      )
}

export default ForgotPassword