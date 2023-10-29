import React, { useState ,useEffect } from 'react'
import axios from '../../../api/axios';
import { ToastContainer ,toast} from 'react-toastify';
let RESEND_URL ='https://udemy-nx1v.onrender.com/resend-otp'
function ResendOtp({email}) {
    const [otp, setOtp] = useState("");
const [minutes, setMinutes] = useState(0);
const [seconds, setSeconds] = useState(0);
useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
  
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);
  
    return () => {
      clearInterval(interval);
    };
  }, [seconds]);
  const handleResendOtp=async()=>{
    setMinutes(1);
  setSeconds(30);
  try{
    const response = await axios.post(RESEND_URL,{email:email},
      {headers:{'Content-Type':'application/json; charset=utf-8'},
        withCredentials: false});
        console.log(response.data.message)
        toast.info("New OTP sent!")
}catch(err){
  toast.error("No Server response")
  console.log('No Server response');
}
  }
  return (
    <div className='belowButton'>
        <button id="resendButton"
        disabled={seconds > 0 || minutes > 0}
        style={{
          color: seconds > 0 || minutes > 0 ? "" : "",
        }}
        onClick={handleResendOtp}
      >
        Resend OTP
      </button>
    <div className="countdown">
    {seconds > 0 || minutes > 0 ? (
      <p>
        Time Remaining:{minutes}:{seconds}
      </p>
    ) : (
      <p>Did't recieve the OTP?</p>
      
    )}</div>
    
      </div>
  )}


export default ResendOtp