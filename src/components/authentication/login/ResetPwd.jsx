import React from 'react';
import './login.css';
import logImg from '../../../assets/log.svg'
import { useState, useEffect } from 'react';
import Fa from '../../../assets/fa.svg';
import Fahid from '../../../assets/fa-hidden.svg';
import { Link } from 'react-router-dom';

function ResetPwd() {
    const [inputs, setInputs] = useState({
        password:"",
        password2:""
    });
    const [error,setError]  =  useState({
        password:"",
        password2:""
    })
    useEffect(() => {
        setError(error => ({
          ...error,
           password2:inputs.password !== inputs.password2 ? "Passwords do not match." : ""
          }))
    }
        , [inputs.password, inputs.password2]);
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
  const passwordShow = () => {
    setShowPassword(!showPassword);
  };
  const passwordShow2 = () => {
    setShowPassword2(!showPassword2);
  };
    const passwordValid=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/;
      const handleChange = e => {setError( {
        ...error,
        password: !passwordValid.test(inputs.password.trim())? 'Password must be at least 8 characters and include one letter and one number' : '',
      })
        setInputs({
          ...inputs,
          [e.target.name]: e.target.value
        });
        // setError( {
        //   ...error,
        //   password: !passwordValid.test(inputs.password.trim())? 'Password must be at least 8 characters and include one letter and one number' : '',
        // })
          
      };
      const handleSubmit = e => {
        e.preventDefault();
        
          let hasErrors = false;
          for (const i in error) {
            if (error[i] !== '') {
              hasErrors = true;
            }
          }
      
          if (!hasErrors) {
            console.log('Form submitted:', inputs);
            localStorage.setItem("loginemail",inputs.email);
          }
          else
          console.log('fill all the details correctly!',error);
      };
  return (
    <>
    <div className='sidestrip'>
    <img className='log' src={logImg}/>
    </div>
    <div className='login_section'>
      <div className='login-statement' id="forgorlog">
      Reset your password
      <div className='login-statement1'id='forgotlog'>
        Create a strong password, and confirm it
      </div></div>
      <form onSubmit={handleSubmit}>
      <div className='form' id='forg'>
       
      <div className="input-signup">
    <input type={showPassword?"text":"password"}
    name='password'
    maxLength={100}
    placeholder='Enter New Password'
    value={inputs.password}
    onChange={handleChange}
    style={{ border: error.password ? "2px solid red" : "2px solid black"}}
    required /> 
    <button type='button' className="icon-button" onClick={passwordShow}>
        <img src={showPassword?Fa:Fahid} />
      </button>
    <label className={error.password ? "error-label":""}>New Password</label>
    <span className="error-message">{error.password}</span>
    </div>
    <div className="input-signup">
    <input type={showPassword2?"text":"password"}
    name='password2'
    maxLength={100}
    placeholder='Re-Enter New Password'
    value={inputs.password2}
    onChange={handleChange}
    style={{ border: error.password2 ? "2px solid red" : "2px solid black"}}
    required /> 
    <button type='button' className="icon-button" onClick={passwordShow2}>
        <img src={showPassword2?Fa:Fahid} />
      </button>
    <label className={error.password2 ? "error-label":""}>Confirm Password</label>
    <span className="error-message">{error.password2}</span>
    </div>
    <Link to={"/login"}><button className='logButton'>Verify</button></Link>
    
    </div>
    </form>
  </div>
   </>)
}

export default ResetPwd