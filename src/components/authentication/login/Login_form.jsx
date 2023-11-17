import React, {useState} from 'react'
import Login_valid from './Login_valid';
import Fa from '../../../assets/fa.svg';
import Fahid from '../../../assets/fa-hidden.svg';
import check from '../../../assets/check.svg'
import uncheck from '../../../assets/uncheck.svg'
import { Link } from 'react-router-dom';
function Login_form() {
  const { handleChange, handleSubmit, error,errorPassword,loading} = Login_valid();
  const [showPassword, setShowPassword] = useState(false);
  const [show, setShow] = useState(true);
  const Show = () => {
    setShow(!show);}
  const passwordShow = () => {
    setShowPassword(!showPassword);}
  return (
    <>
      <form onSubmit={handleSubmit}> 
      <div className='form'>
       <div className="input-login">
    <input type="email"
    name='email'
    maxLength={100}
    placeholder='Enter Email'
    onChange={handleChange}
    style={{ border: error? "2px solid red" : "2px solid black"}}
    required /> 
    <label className={error? "error-label":""}>Email</label>
    <span className="error-message">{error}</span>
   </div>
  <div className="input-login">
    <input type={showPassword?"text":"password"}
    id='pwd'
    name='password'
    maxLength={100}
    placeholder='Enter Password'
    onChange={handleChange}
    style={{ border: errorPassword ? "2px solid red" : "2px solid black"}}
    required /> 
    <div className="icon-button" onClick={passwordShow}>
        <img src={showPassword?Fa:Fahid} />
      </div>
    <label className={errorPassword ? "error-label":""}>Password</label>
    <span className="error-message">{errorPassword}</span>
  </div>
  <div className='belowButton'>
    <div className='checkB'><img id='checkbox' src={show?uncheck:check} onClick={Show}/>Remember me</div>
  <Link to="/forgot" className='fort'>Forgot Password?</Link>
  </div>
  <button className='logButton'
   disabled={loading}>
   {loading? (<svg className='sv' width="40"viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
 <circle cx="50" cy="50" r="45"/>
</svg>)
   :("Log in")}</button>
  <div className='authFooter'>Need an account? <Link to={"/signup"}className='fort'>Sign up</Link></div>
  </div>
  </form>
  </>
  )
}

export default Login_form