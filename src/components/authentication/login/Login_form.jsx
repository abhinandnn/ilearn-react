import React, {useState} from 'react'
import Login_valid from './Login_valid';
import Fa from '../../../assets/fa.svg';
import Fahid from '../../../assets/fa-hidden.svg';
import { Link } from 'react-router-dom';
function Login_form() {
  const { handleChange, inputs, handleSubmit, error} = Login_valid();
  const [showPassword, setShowPassword] = useState(false);
  const passwordShow = () => {
    setShowPassword(!showPassword);}
  return (
      <form onSubmit={handleSubmit}> 
      <div className='form'>
       <div className="input-login">
    <input type="email"
    name='email'
    maxLength={100}
    placeholder='Enter Email'
    onChange={handleChange}
    style={{ border: error.email ? "2px solid red" : "2px solid black"}}
    required /> 
    <label className={error.email ? "error-label":""}>Email</label>
    <span className="error-message">{error.email}</span>
   </div>
  <div className="input-login">
    <input type={showPassword?"text":"password"}
    id='pwd'
    name='password'
    maxLength={100}
    placeholder='Enter Password'
    onChange={handleChange}
    style={{ border: error.password ? "2px solid red" : "2px solid black"}}
    required /> 
    <button type='button' className="icon-button" onClick={passwordShow}>
        <img src={showPassword?Fa:Fahid} />
      </button>
    <label className={error.password ? "error-label":""}>Password</label>
    <span className="error-message">{error.password}</span>
  </div>
  <button className='logButton'>Log in</button>
  <Link to="/forgot">Forgot Password?</Link>
  </div>
  </form>
  )
}

export default Login_form