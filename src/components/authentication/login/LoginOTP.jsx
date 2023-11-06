import React, { useState } from 'react';
import { useNavigate, useLocation} from 'react-router-dom';
import './login.css';
import logImg from '../../../assets/log.svg';
import OTP from './OTP.jsx'
import InputOTP from './InputOTP'
import axios from "../../../api/axios";
import { toast } from 'react-toastify';
import ResendOtp from './ResendOtp';
import { useAuthProcess } from '../../utils/AuthProcessContext.jsx';
let OTP_URL ='https://udemy-nx1v.onrender.com/verify-email'
function LoginOTP() {
  let token,em,sign=false;
  const {unSubmit,doSubmit}=useAuthProcess();
  const [loading,setLoading]=useState();
  const location = useLocation();
  const navigate = useNavigate();
  const [error,setError]=useState("");
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
    setLoading(true);
    const response = await axios.post(OTP_URL,{email:em,otp:otp},
      {headers:{'Content-Type':'application/json; charset=utf-8'},
        withCredentials: false});
        // console.log(response.data.message);
        if(response.data.success){
          setLoading(false);
        toast.success("OTP verified!")
          if(!sign)
        {token=response.data.data.token;
        localStorage.setItem("Ftoken",token);
        }
          if(sign)
          navigate("/login");
        else
           { 
             navigate('/resetpwd')  }        

}}catch(err){
  setLoading(false)
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
      <div className='logoMobile'><span>i</span>Learn</div>
        <img className='log' src={logImg} alt="Logo" />
      </div>
      <div className='login_section' id='otpsec'>
        <div className='loginStatement' id='otpstate'>
          <div className='otpstate2'>Verify Yourself
          <div className='loginStatement1' id='otpstate2'>
            We have sent a 4 digit otp to<br/>
            <span id='otemail'>{em}</span>
          </div></div>
          <form onSubmit={handleSubmit}>
          <div id='otpp'>
            Enter OTP
            <div>
              
      <InputOTP handleError={handleError} error1 = {error}numInputs={4} onComplete={handleOtpComplete} />
    </div>
    <ResendOtp email={em}/>
          </div>
          <button id="otpButton" className='logButton'disabled={loading}>
   {loading? (<svg className='sv' width="40"viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
 <circle cx="50" cy="50" r="45"/>
</svg>)
   :("Verify")}</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginOTP;
