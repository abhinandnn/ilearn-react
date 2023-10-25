import React from 'react';
import Navbar from './navbar/Navbar';
import Login from './authentication/login/Login';
import LoginOTP from './authentication/login/LoginOTP.jsx';
// import Signup from './authentication/signup/Signup';
function App() {

  return (
    <div>
      <Navbar />
      {/* <Signup/> */}
      <LoginOTP />
    </div>
  )
}

export default App