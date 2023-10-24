import React from 'react';
import Login_form from './Login_form';
import './login.css';
import logImg from '../assets/log.svg'
function Login() {
  return (
    <>
    <div className='sidestrip'>
    <img className='log' src={logImg}/>
    </div>
    <div className='login_section'>
      <div className='login-statement'>
      Log in to <span>i</span>Learn
      <div className='login-statement1'>
        Enter your registered email id and password to continue
      </div>
      </div>
    <Login_form/>
    </div>
    </>
  )
}

export default Login