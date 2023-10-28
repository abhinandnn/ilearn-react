import React, { useState, useRef } from "react";

const InputOTP = ({ numInputs, onComplete }) => {
  const [otp, setOtp] = useState(Array(numInputs).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
 

    if (value && index < numInputs - 1) {
      inputRefs.current[index + 1].focus();
    }
    if (!newOtp.includes("")) {
      onComplete(newOtp.join(""));
    }
  };

  return (
    <div id="otpCont">
      {otp.map((digit, index) => (
        <input
        id="otpOK"
          key={index}
          type="text"
          maxLength="1"
          value={digit}
          onChange={(e) => handleChange(e, index)}
          ref={(inputDigit) => (inputRefs.current[index] = inputDigit)}
        />
      ))}
    </div>
  );
};

export default InputOTP;
