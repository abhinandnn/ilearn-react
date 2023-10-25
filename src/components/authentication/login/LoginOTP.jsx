import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import './login.css';
import logImg from '../../../assets/log.svg';

function LoginOTP() {
  const [otp, setotp] = useState("");

  const handleChange = (otp) =>
  { setotp(otp);
  }

  const renderInput = (inputProps, index) => {
    return (
      <input
        {...inputProps}
        key={index}
        style={{
          width: '48px',
          height: '48px',
          margin: '8px',
          fontSize: '24px',
          textAlign: 'center',
          borderRadius: '16px',
          border: '2px solid black',
          fontFamily:'Sofia Sans',
          fontWeight:700
        }}
      />
    );
  };

  return (
    <>
      <div className='sidestrip'>
        <img className='log' src={logImg} alt="Logo" />
      </div>
      <div className='login_section' id='otpsec'>
        <div className='login-statement' id='otpstate'>
          Verify Yourself
          <div className='login-statement1' id='otpstate2'>
            We have sent a 6 digit otp to<br></br>
            <span id='otemail'> {localStorage.getItem("loginemail")}</span>
          </div>
          <div id='otpp'>
            Enter OTP
          <OtpInput
            value={otp}
            onChange={handleChange}
            numInputs={6}
            separator={<span style={{ width: "8px" }}></span>}
            isInputNum={true}
            shouldAutoFocus={true}
            inputStyle="otp-input"
            containerStyle="otp-container"
            renderInput={renderInput}
          />
          </div>
          <button className='logButton'>Verify</button>
        </div>
      </div>
    </>
  );
}

export default LoginOTP;
