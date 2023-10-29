import React, { useState } from 'react';
import { useNavigate, useLocation} from 'react-router-dom';
import './login.css';
import logImg from '../../../assets/log.svg';
import OTP from './OTP.jsx'
import InputOTP from './InputOTP'
import axios from "../../../api/axios";
import { ToastContainer,toast } from 'react-toastify';
import ResendOtp from './ResendOtp';
let OTP_URL ='https://udemy-nx1v.onrender.com/verify-email'

function LoginOTP() {
  let token,em,sign=false;
  const location = useLocation();
  const navigate = useNavigate();
  const [error,setError]=useState("");
  console.log("lolol")
  if(location.pathname==='/forgot/otp')
  { 
    em=localStorage.getItem("forgetEmail");
OTP_URL='https://udemy-nx1v.onrender.com/verify-otp'}
  else
  {
  console.log(location)
    em=localStorage.getItem("signupEmail");
sign=true}
  const {otp,handleOtpComplete} = OTP();
  const handleError=()=> {
    setError("");

  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    
  try{
    const response = await axios.post(OTP_URL,{email:em,otp:otp},
      {headers:{'Content-Type':'application/json; charset=utf-8'},
        withCredentials: false});
        // console.log(response.data.message);
        if(response.data.success){
        toast.success("OTP verified!")
          if(!sign)
        {token=response.data.data.token;
        localStorage.setItem("Ftoken",token);}
          console.log(response.data.message);
          if(sign)
          navigate('/');
        else
            navigate('/resetpwd')          

}}catch(err){
if(err.response){
console.log('Server responded');
toast.error("OTP is invalid");
setError("Invalid OTP");
console.log(err.response.data.message);
}
else
  console.log('No Server response');
}}
  return (
    <>
      <div className='sidestrip'>
        <img className='log' src={logImg} alt="Logo" />
      </div>
      <div className='login_section' id='otpsec'>
        <div className='loginStatement' id='otpstate'>
          <div className='otpstate2'>Verify Yourself
          <div className='loginStatement1' id='otpstate2'>
            We have sent a 4 digit otp to<br/>
            <span id='otemail'>{em}</span>
          </div></div>
          <div id='otpp'>
            Enter OTP
            <div>
      <InputOTP handleError={handleError} error1 = {error}numInputs={4} onComplete={handleOtpComplete} />
    </div>
    <ResendOtp email={em}/>
          </div>
          <button className='logButton' onClick={handleSubmit}>Verify</button>
          
        </div>
      </div>
    </>
  );
}

export default LoginOTP;
