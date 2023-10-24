import React from 'react';
import Navbar from './navbar/Navbar';
// import Login from './authentication/login/Login';
import Signup from './authentication/signup/Signup';
function App() {

  return (
    <div>
      <Navbar />
      <Signup/>
      {/* <Login /> */}
    </div>
  )
}

export default App