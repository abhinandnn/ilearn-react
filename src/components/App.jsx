import React from 'react';
import Navbar from './navbar/Navbar';
import Login from './authentication/login/Login';
import { Outlet } from 'react-router-dom';
function App() {

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App