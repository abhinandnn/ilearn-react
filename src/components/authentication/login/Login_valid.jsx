import React, { useState } from "react";
import { useAuth } from "../../utils/AuthContext";
import axios from "../../../api/axios";
import { ToastContainer,toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css'
const LOGIN_URL ='https://udemy-nx1v.onrender.com/sign-in'

const Login_valid = () =>{
  const { login } = useAuth();
  const navigate = useNavigate();
const[email,setEmail]=useState("");
const[password,setPwd]=useState("");
const [error,setError]  =  useState("");
const [approve,setApprove]=useState(false);
const[loading,setLoading]=useState(false)
const[errorPassword,setErrorPassword]=useState("");
const email_valid= /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9.-]{2,}$/;
  const handleChange = e => {
    setErrorPassword("");

    if(e.target.name==="email")
    {
    if(!email_valid.test(e.target.value)&&e.target.value!=="")
 { setError('Enter a valid email')
    
  }
  else
  {
    setError("")
    setEmail(e.target.value);
  }}
  else{
    setPwd(e.target.value);
  }

  };
  const handleSubmit = async(e) => {
    e.preventDefault();
      let hasErrors = false;
      for (const i in error) {
        if (error[i] !== '') {
          hasErrors = true;
        }
      }
  
      if (!hasErrors) {
  try{
    setLoading(true)
    const response = await axios.post(LOGIN_URL,{email:email,password:password},
      {headers:{'Content-Type':'application/json; charset=utf-8'},
        withCredentials: false});
        console.log("login success",response.data.data.token)
        toast.success("Login Successful")
        login(response.data.data.token);
        navigate('/home');
        setLoading(false);
}catch(err){
if(err.response){
console.log('Server responded');
if(err.response.status===400)
{
  setError(err.response.data.message)
}
else{
setErrorPassword(err.response.data.message);
}}
else
  console.log('No Server response');
setLoading(false);
}}}
  return { handleChange, handleSubmit, error ,approve ,errorPassword,ToastContainer,loading};
};
export default Login_valid;
