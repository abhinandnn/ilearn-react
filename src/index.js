
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
import VideoPage from './components/VideoPage/VideoPage.jsx';
import Learning from './components/learnings/Learning.jsx';
import CartPage from './components/cartPage/CartPage.jsx';
import ProfilePage from './components/profile/ProfilePage.jsx';
import EduHome from './components/EducatorSection.jsx/EduHome.jsx';
import UploadCourses from './components/EducatorSection.jsx/UploadCourses.jsx';
import EduProfile from './components/EducatorSection.jsx/EduProfile.jsx';
import ProtectedRoute from './components/utils/ProtectedRoute.jsx';
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
          <Route path="coursePage" element={<CoursePage />}/>
          <Route path="videoPage" element={<VideoPage/>}/>
          <Route path="learning/:navOptFromUrl" element={<Learning/>}/>
          <Route path="cartPage" element={<CartPage/>}/>
          <Route path='profilePage' element={<ProfilePage/>}/>
          <Route path='educator/home' element={<EduHome/>}/>
<Route path='educator/uploadCourses' element={<UploadCourses/>}/>
<Route path='educator/profile' element={<EduProfile/>}/>

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
