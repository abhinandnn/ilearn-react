import React , {useState} from 'react'
import Signup_valid from './Signup_valid';
import Fa from '../../../assets/fa.svg';
import Fahid from '../../../assets/fa-hidden.svg';
import { Link } from 'react-router-dom';
function Signup_form() {
  const { handleChange, inputs, handleSubmit, error} = Signup_valid();
  const [showPassword, setShowPassword] = useState(false);
  const passwordShow = () => {
    setShowPassword(!showPassword);
  };
  return (
      <form onSubmit={handleSubmit}> 
      <div className='form'>
        <div className='nameSignup'>
        <div className="input-signup-name">
    <input type="text"
    name='firstname'
    maxLength={100}
    placeholder='Enter First Name'
    value={inputs.firstname}
    onChange={handleChange}
    style={{ border: error.firstname ? "2px solid red" : "2px solid black"}}
    required /> 
    <label className={error.firstname ? "error-label":""}>First Name</label>
    <span className="error-message">{error.firstname}</span>
   </div>
   <div className="input-signup-name">
    <input type="text"
    name='lastname'
    maxLength={100}
    placeholder='Enter Last Name'
    value={inputs.lastname}
    onChange={handleChange}
    style={{ border: error.lastname ? "2px solid red" : "2px solid black"}}
    required /> 
    <label className={error.lastname ? "error-label":""}>Last Name</label>
    <span className="error-message">{error.lastname}</span>
   </div>
        </div>
       <div className="input-signup">
    <input type="email"
    name='email'
    maxLength={100}
    placeholder='Enter Email'
    value={inputs.email}
    onChange={handleChange}
    style={{ border: error.email ? "2px solid red" : "2px solid black"}}
    required /> 
    <label className={error.email ? "error-label":""}>Email</label>
    <span className="error-message">{error.email}</span>
   </div>
  <div className="input-signup">
    <input type={showPassword?"text":"password"}
    name='password'
    maxLength={100}
    placeholder='Enter Password'
    value={inputs.password}
    onChange={handleChange}
    style={{ border: error.password ? "2px solid red" : "2px solid black"}}
    required /> 
    <button type='button' className="icon-button" onClick={passwordShow}>
        <img src={showPassword?Fa:Fahid} />
      </button>
    <label className={error.password ? "error-label":""}>Password</label>
    <span className="error-message">{error.password}</span>
  </div>
  <Link to={'/otp'}><button className='signButton'>Sign up</button></Link>
  </div>
  </form>
  )
}

export default Signup_form