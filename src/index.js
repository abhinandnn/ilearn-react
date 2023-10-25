import React from 'react';
import {Route,RouterProvider,createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Login from './components/authentication/login/Login.jsx';
import Signup from './components/authentication/signup/Signup.jsx';
const router=createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<Signup />}/>
          </Route>
    )
)
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)

