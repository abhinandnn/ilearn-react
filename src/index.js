import React from 'react';
import {Route,RouterProvider,createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Login from './components/authentication/login/Login.jsx';
import Signup from './components/authentication/signup/Signup.jsx';
import ForgotPassword from './components/authentication/login/ForgotPassword.jsx';
import ResetPwd from './components/authentication/login/ResetPwd.jsx';
import LoginOTP from './components/authentication/login/LoginOTP.jsx';
const router=createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
        <Route path='login' element={<Login/>}/>
        <Route path='otp' element={<LoginOTP/>}/>
        <Route path='signup' element={<Signup />}/>
        <Route path='forgot' element={<ForgotPassword/>}/>
        <Route path='resetpwd' element={<ResetPwd/>}/>
          </Route>
    )
)
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)

