import React, { useState } from "react";
import axios from "../../../api/axios";
const LOGIN_URL ='https://udemy-nx1v.onrender.com/sign-in'
const Login_valid = () =>{
const[email,setEmail]=useState("");
const[password,setPwd]=useState("");
const [error,setError]  =  useState("");
const [approve,setApprove]=useState(false);
const[errorPassword,setErrorPassword]=useState("");
let r=true;
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
        console.log(email,password);
        localStorage.setItem("loginEmail",email);
        localStorage.setItem("loginPassword",password);

  try{
    const response = await axios.post(LOGIN_URL,{email:email,password:password},
      {headers:{'Content-Type':'application/json; charset=utf-8'},
        withCredentials: false});
        const authToken= response.data.token;
        localStorage.setItem("authId",authToken);
}catch(err){
if(err.response){
console.log('Server responded');
if(err.response.status===400)
{r=false;
  setError(err.response.data.message)
}
setErrorPassword(err.response.data.message);
}
else
  console.log('No Server response');
}}}
  return { handleChange, handleSubmit, error ,approve ,errorPassword,r};
};
export default Login_valid;