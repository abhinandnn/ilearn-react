import React from 'react';
import Login_form from './Login_form';
import './login.css';
import logImg from '../../../assets/log.svg'
function Login() {
  
  return (
    <div>
    <div className='sidestrip'>
    <img className='log' src={logImg}/>
    </div>
    <div className='login_section'>
      <div className='loginStatement'>
      Log in to <span>i</span>Learn
      <div className='loginStatement1'>
        Enter your registered email id and password to continue
      </div>
      </div>
    <Login_form/>
    </div>
    </div>
  )
}

export default Login