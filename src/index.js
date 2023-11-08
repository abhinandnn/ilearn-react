
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './components/App.jsx';
import Login from './components/authentication/login/Login.jsx';
import Signup from './components/authentication/signup/Signup.jsx';
import ForgotPassword from './components/authentication/login/ForgotPassword.jsx';
import ResetPwd from './components/authentication/login/ResetPwd.jsx';
import LoginOTP from './components/authentication/login/LoginOTP.jsx';
import Home from './components/home/Home.jsx';
import CourseVariety from './components/home/CourseVariety.jsx';
import { AuthProvider } from './components/utils/AuthContext.jsx';
import { AuthProcessProvider } from './components/utils/AuthProcessContext.jsx';
import ProtectedRoute1 from './components/utils/ProtectedRoute1.jsx';
import CoursePage from './components/CoursePage/CoursePage.jsx';

const router = (
    <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="forgot/otp" element={
          <ProtectedRoute1><LoginOTP /></ProtectedRoute1>} />
          <Route path="signup/otp" element={<ProtectedRoute1><LoginOTP /></ProtectedRoute1>} />
          <Route path="resetpwd" element={<ProtectedRoute1><ResetPwd /></ProtectedRoute1>} />
          <Route path="signup" element={<Signup />} />
          <Route path="forgot" element={<ForgotPassword />} />
          <Route path="home" element={<Home />} />
          <Route path="courses" element={<CourseVariety />} />
          <Route path="coursePage" element={<CoursePage img1={"https://picsum.photos/300/200"} star={4.8} creator={"Harsh"} date={"21 Nov 23"} courseTitle={"Complete Web Design: from Figma to Webflow to Freelancing "} learner={8} />}/>
        </Route>
      </Routes>
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <AuthProcessProvider>
        <AuthProvider>
      {router}
      </AuthProvider>
    </AuthProcessProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
