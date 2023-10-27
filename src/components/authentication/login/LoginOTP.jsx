import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import logImg from '../../../assets/log.svg';
import OTP from './OTP.jsx'
import InputOTP from './InputOTP'
import axios from "../../../api/axios";
const OTP_URL ='https://udemy-nx1v.onrender.com/verify-email'

function LoginOTP() {
  const navigate = useNavigate();
  const em=localStorage.getItem("signupEmail");
  const {otp,handleOtpComplete} = OTP();
  const handleSubmit = async(e) => {
    e.preventDefault();
      // if (!hasErrors) {
      //   console.log(email,password);
  try{
    const response = await axios.post(OTP_URL,{email:em,otp:otp},
      {headers:{'Content-Type':'application/json; charset=utf-8'},
        withCredentials: false});
        console.log(response.data.message);
        if(response.data.success){
          console.log(response.data.message);
         navigate('/login');}

}catch(err){
if(err.response){
console.log('Server responded');
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
          Verify Yourself
          <div className='loginStatement1' id='otpstate2'>
            We have sent a 4 digit otp to<br></br>
            <span id='otemail'> {localStorage.getItem(em)}</span>
          </div>
          <div id='otpp'>
            Enter OTP
            <div>
      <InputOTP numInputs={4} onComplete={handleOtpComplete} />
    </div>
          </div>
          <button className='logButton' onClick={handleSubmit}>Verify</button>
        </div>
      </div>
    </>
  );
}

export default LoginOTP;
