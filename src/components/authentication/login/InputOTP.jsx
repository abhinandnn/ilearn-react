import React, { useState, useRef } from "react";
const InputOTP = ({ numInputs, onComplete,error1 ,handleError}) => {
  const [otp, setOtp] = useState(Array(numInputs).fill(""));
  const[error,setError]=useState("")
  const inputRefs = useRef([]);
  const [otp1, setOtp1] = useState("");
  const handleOtpComplete = (otpValue) => {
    setOtp1(otpValue);
  };
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
   if( index < numInputs - 1)
   setError("OTP must contain 4 digits");
    if (value && index < numInputs - 1) {
      inputRefs.current[index + 1].focus();

    }
    if (!newOtp.includes("")) {
      onComplete(newOtp.join(""));
      setError("");
      handleError();
    }
  };
  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
      inputRefs.current[index - 1].focus();
      
    }
  };

  return (
    
    <div id="otpCont" >
      {otp.map((digit, index) => (
        <input
        id="otpOK"
          key={index}
          type="text"
          maxLength="1"
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(inputDigit) => (inputRefs.current[index] = inputDigit)}
          style={{ border: error||error1? "2px solid red" : "2px solid black"}}
          required
        />
      ))}
      <p id='otpError'className="error-message">{error||error1}</p>
    </div>

  );}
;

export default InputOTP;
