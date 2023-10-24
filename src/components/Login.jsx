import React from 'react';
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
        Log in to <span>i</span>
      </div>
    <div className="input-field">
    <input type="email"
    name='email'
    placeholder='Enter Email'
    required /> 
    <label>Email</label>
  </div>
  <div className="input-field">
    <input type="text"
    name='password'
    placeholder='Enter Password'
    required /> 
    <label>Password</label>
  </div>
    </div>
    </>
  )
}

export default Login