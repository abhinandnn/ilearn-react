import React, { useState } from "react";
import './login.css';
import logImg from '../../../assets/log.svg'
import { useNavigate } from 'react-router-dom';
import axios from "../../../api/axios";
const FORGOT_URL ='https://udemy-nx1v.onrender.com/forget-password'
const ForgotPassword = () =>{
const[email,setEmail]=useState("");
const [error,setError]  =  useState("");
const email_valid= /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9.-]{2,}$/;
const navigate=useNavigate();
  const handleChange = e => {

    if(e.target.name==="email")
    {
    if(!email_valid.test(e.target.value))
 { setError('Enter a valid email')  }
  else
  {
    setError("")
    setEmail(e.target.value);
  }}
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    
      let hasErrors = false;
      for (const i in error) {
        if (error[i] !== '') {
          hasErrors = true;
        }
      }
  
      if (!hasErrors) {
        console.log(email);
  try{
    const response = await axios.post(FORGOT_URL,{email:email},
      {headers:{'Content-Type':'application/json; charset=utf-8'},
        withCredentials: false});
        if(response.data.success)
        {
        navigate('/otp')
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
    <div className='login_section'>
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
    <label className={error ? "error-label":""}>Email</label>
    <span className="error-message" style={{color:"red"}}>{error}</span>
   </div>
   <button className='logButton'>Next</button>
   </div>
   </form>
      </div>
      </div>
      </>
      )
}

export default ForgotPassword