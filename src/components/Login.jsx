import React from 'react';
import './login.css';
import logImg from '../assets/log.svg'
function Login() {
  return (
    <div>
    <div className='sidestrip'>
    <img className='log' src={logImg}/>
    </div>
    </div>
  )
}

export default Login