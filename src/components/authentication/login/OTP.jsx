import React, { useState } from "react";
import InputOTP from "./InputOTP";

const OTP = () => {
  const [otp, setOtp] = useState("");
  const handleOtpComplete = (otpValue) => {
    setOtp(otpValue);
    
    
  };

  return ({otp,handleOtpComplete}
  );
};

export default OTP;
