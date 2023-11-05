import React from 'react';
import './login.css';
import logImg from '../../../assets/log.svg'
import { useState, useEffect } from 'react';
import Fa from '../../../assets/fa.svg';
import Fahid from '../../../assets/fa-hidden.svg';
import PasswordStrength from '../signup/passwordStrength';
import { useNavigate } from 'react-router-dom';
import axios from '../../../api/axios';
import { ToastContainer,toast } from 'react-toastify';
const RESET_URL = 'https://udemy-nx1v.onrender.com/change-password'
function ResetPwd() {
  const[loading,setLoading]=useState(false);
    const Navigate=useNavigate();
    const Ftoken=localStorage.getItem("Ftoken")
    const{strength,calculateStrength}=PasswordStrength();
    const passwordValid=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#^?&])[A-Za-z\d@$!%*#^?&-]{8,}/;
    const[password,setPassword]=useState("");
    const[password2,setPassword2]=useState("");
    const [errorPassword,setErrorPassword]  =  useState("");
    const [errorPassword2,setErrorPassword2]  =  useState("");
    useEffect(() => {
          if(password !== password2)
          {setErrorPassword2("Passwords do not match.");}
        else
        setErrorPassword2("");
    }
        , [password, password2]);
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
        if (name === "password") {
            if (!passwordValid.test(value)&&value!=="") {
              errorMessage = "Password must contain 8 characters with full strength";
            }
            setErrorPassword(errorMessage);}
            if(name==="password")
            {setPassword(value);
              calculateStrength(value);}
            else if(name==="password2")
            setPassword2(value);
          };
      const handleSubmit = async(e) => {
        e.preventDefault();
        
          let hasErrors = false;
          if((errorPassword||errorPassword2))
    {hasErrors=true}
          if (!hasErrors) {
            console.log('Form submitted:');
            localStorage.setItem("resetPassword",password);
            try{
              setLoading(true);
              console.log(password);
              const response = await axios.post(RESET_URL,{password:password},
                {headers:{'Authorization':`Bearer ${Ftoken}`},
                  withCredentials: false});
                  if(response.data.success)
                  {
                    setLoading(false);
                    toast.success("Password updated!")
                  Navigate("/login")
                  console.log(response.data.message);}
          }catch(err){
            setLoading(false)
          if(err.response){
          console.log('Server responded');
          console.log(err.response.data.message);
          }
          else
            console.log('No Server response');
          }}
          }
  return (
    <>
    <div className='sidestrip'>
    <div className='logoMobile'><span>i</span>Learn</div>
    <img className='log' src={logImg}/>
    </div>
    <div className='login_section'>
      <div className='loginStatement' id="forgorlog">
      Reset your password
      <div className='loginStatement1'id='forgotlog'>
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
    <div className="icon-button" onClick={passwordShow}>
        <img src={showPassword?Fa:Fahid} />
      </div>
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
    <div className="icon-button" onClick={passwordShow2}>
     <img src={showPassword2?Fa:Fahid} />
      </div>
    <label className={errorPassword2 ? "error-label":""}>Confirm Password</label>
    <span className="error-message">{errorPassword2}</span>
    </div>
    <div className='pwdStrength'>Password Strength
    <div className="strengthBar1"><div style={{background:strength===1?"#FF0000":strength===2?"#DEE223":strength===3?"#1D7AE8":strength===4?"#1FE627":"#6B6D7C"}}className="strengthBar">
      </div><div style={{background:strength===1?"#6B6D7C":strength===2?"#DEE223":strength===3?"#1D7AE8":strength===4?"#1FE627":"#6B6D7C"}} className="strengthBar">
      </div><div style={{background:strength===1?"#6B6D7C":strength===2?"#6B6D7C":strength===3?"#1D7AE8":strength===4?"#1FE627":"#6B6D7C"}} className="strengthBar">
      </div><div style={{background:strength===1?"#6B6D7C":strength===2?"#6B6D7C":strength===3?"#6B6D7C":strength===4?"#1FE627":"#6B6D7C"}} className="strengthBar">
      </div></div>
  </div>
    <button className='logButton'disabled= {loading}>
   {loading? (<svg className='sv' width="40"viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
 <circle cx="50" cy="50" r="45"/>
</svg>)
   :("Next")}</button>
    
    </div>
    </form>
  </div>
   </>)
}

export default ResetPwd