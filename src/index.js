import React from 'react';
import {Route,RouterProvider,createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import Login from './components/authentication/login/Login.jsx';
import Signup from './components/authentication/signup/Signup.jsx';
import ForgotPassword from './components/authentication/login/ForgotPassword.jsx';
import ResetPwd from './components/authentication/login/ResetPwd.jsx';
import LoginOTP from './components/authentication/login/LoginOTP.jsx';
import Home from './components/home/Home.jsx';
import CourseVariety from './components/home/CourseVariety.jsx';
// import { BrowserRouter as Router, Route, Navigate } from "react-router-dom";
const allowedPaths=["/forgot","/signup"]
const router=createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
        <Route path='' element={<Login/>}/>
        <Route path='forgot/otp' element={<LoginOTP/>}/>
        <Route path='signup/otp' element={<LoginOTP/>}/>
        <Route path='signup' element={<Signup />}/>
        <Route path='forgot' element={<ForgotPassword/>}/>
        <Route path='resetpwd' element={<ResetPwd/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='courses' element={<CourseVariety/>}/>
          </Route>
    )
)
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)

