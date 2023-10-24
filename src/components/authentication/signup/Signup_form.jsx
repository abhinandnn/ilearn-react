import React from 'react'
import signup_valid from './Signup_valid';
function signup_form() {
  const { handleChange, inputs, handleSubmit, error} = signup_valid();
  return (
      <form onSubmit={handleSubmit}> 
      <div className='form'>
        <div className='nameSignup'>
        <div className="input-signup-name">
    <input type="text"
    name='firstname'
    maxLength={100}
    placeholder='Enter First Name'
    value={inputs.email}
    onChange={handleChange}
    style={{ border: error.email ? "2px solid red" : "2px solid black"}}
    required /> 
    <label className={error.email ? "error-label":""}>First Name</label>
    <span className="error-message">{error.email}</span>
   </div>
   <div className="input-signup-name">
    <input type="text"
    name='lastname'
    maxLength={100}
    placeholder='Enter Last Name'
    value={inputs.email}
    onChange={handleChange}
    style={{ border: error.email ? "2px solid red" : "2px solid black"}}
    required /> 
    <label className={error.email ? "error-label":""}>Last Name</label>
    <span className="error-message">{error.email}</span>
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

export default signup_form