import React from 'react'
import Login_valid from './Login_valid';
function Login_form() {
  const { handleChange, inputs, handleSubmit, error} = Login_valid();
  return (
      <form onSubmit={handleSubmit}> 
      <div className='form'>
       <div className="input-field">
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
  <div className="input-field">
    <input type="password"
    name='password'
    maxLength={100}
    placeholder='Enter Password'
    value={inputs.password}
    onChange={handleChange}
    style={{ border: error.password ? "2px solid red" : "2px solid black"}}
    required /> 
    <label className={error.password ? "error-label":""}>Password</label>
    <span className="error-message">{error.password}</span>
  </div>
  <button>Log in</button>
  </div>
  </form>
  )
}

export default Login_form