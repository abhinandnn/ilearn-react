import React from 'react';
import './login.css';
import logImg from '../../../assets/log.svg'
import { useState, useEffect } from 'react';
import Fa from '../../../assets/fa.svg';
import Fahid from '../../../assets/fa-hidden.svg';
import { Link } from 'react-router-dom';

function ResetPwd() {
    const passwordValid=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/;
    const[password,setPassword]=useState("");
    const[password2,setPassword2]=useState("");
    const [errorPassword,setErrorPassword]  =  useState("");
    const [errorPassword2,setErrorPassword2]  =  useState("");
    // useEffect(() => {
    //       if(password !== password2)
    //       {setErrorPassword2("Passwords do not match.");}
    //     else
    //     setErrorPassword2("");
    // }
    //     , [password, password2]);
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
  const passwordShow = () => {
    setShowPassword(!showPassword);
  };
  const passwordShow2 = () => {
    setShowPassword2(!showPassword2);
  };
      const handleChange = e => {
        const { name, value } = e.target;
        let errorMessage = "";
        let errorMessage2 = "";

        if (name === "password") {
            if (!passwordValid.test(value)&&value!=="") {
              errorMessage = "Password should be at least 8 characters long and contain at least one letter and one number";
            }setErrorPassword(errorMessage);
            }
            if (name === 'password2'||name==='password')
            {if(password !== password2) {
                errorMessage2 = "Passwords don't match.";}
                setErrorPassword2(errorMessage2);
              }
            if(name==="password")
            setPassword(value);
            else if(name==="password2")
            setPassword2(value);
        console.log(password,password2)
          };
      const handleSubmit = e => {
        e.preventDefault();
        
          let hasErrors = false;
          if(!(errorPassword||errorPassword2))
    {hasErrors=false}
          
      
          if (!hasErrors) {
            console.log('Form submitted:');
            localStorage.setItem("loginemail");
          }
          else
          console.log('fill all the details correctly!');
        }
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
    //}
    onChange={handleChange}
    style={{ border: errorPassword ? "2px solid red" : "2px solid black"}}
    required /> 
    <button type='button' className="icon-button" onClick={passwordShow}>
        <img src={showPassword?Fa:Fahid} />
      </button>
    <label className={errorPassword ? "error-label":""}>New Password</label>
    <span className="error-message">{errorPassword}</span>
    </div>
    <div className="input-signup">
    <input type={showPassword2?"text":"password"}
    name='password2'
    maxLength={100}
    placeholder='Re-Enter New Password'
    //2}
    onChange={handleChange}
    style={{ border: errorPassword2 ? "2px solid red" : "2px solid black"}}
    required /> 
    <button type='button' className="icon-button" onClick={passwordShow2}>
        <img src={showPassword2?Fa:Fahid} />
      </button>
    <label className={errorPassword2 ? "error-label":""}>Confirm Password</label>
    <span className="error-message">{errorPassword2}</span>
    </div>
    <button className='logButton'>Next</button>
    
    </div>
    </form>
  </div>
   </>)
}

export default ResetPwd