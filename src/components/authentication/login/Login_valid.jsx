import React, { useState } from "react";
import axios from "../../../api/axios";
const LOGIN_URL ='https://udemy-nx1v.onrender.com/sign-in'
const Login_valid = () =>{
const[email,setEmail]=useState("");
const[password,setPwd]=useState("")
const [error,setError]  =  useState({
    email:"",
})
const [approve,setApprove]=useState(false);

const email_valid= /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const handleChange = e => {
    if(e.target.name==="email")
    {
    if(!email_valid.test(e.target.value))
 { setError( {
      email: 'Enter a valid email'
    })
    
  }
  else
  {
    setError( {
      email: ''
    })
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
  try{
    const response = await axios.post(LOGIN_URL,
      JSON.stringify({email:email,password:password}),
      {
        headers:{'Content-Type':'application/json'},
        withCredentials: true
      }

  );
  console.log(JSON.stringify(response?.data))
}catch(err){
if(!err?.response)
console.log('No Server Response');

else if(err.response?.status===401)
  console.log('No id');
}}}
  return { handleChange, handleSubmit, error ,approve ,setPwd,setEmail};
};
export default Login_valid;