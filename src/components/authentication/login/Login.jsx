import React, { useEffect } from 'react';
import Login_form from './Login_form';
import './login.css';
import logImg from '../../../assets/log.svg'
import { useAuth } from '../../utils/AuthContext';
import { useNavigate } from 'react-router-dom';
function Login() {
  const {loginStatus}=useAuth();
  const navigate=useNavigate();
  useEffect(()=>{
    if(loginStatus)
    navigate('/home')
  },[loginStatus])
  return (
    <div>
    <div className='sidestrip'>
    <div className='logoMobile'><span>i</span>Learn</div>
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