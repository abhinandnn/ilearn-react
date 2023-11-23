import React from 'react';
import './navbar.css'
import searchIcon from '../../assets/search.svg'
import heart from '../../assets/heart.svg'
import cart from '../../assets/cart.svg'
import notification from '../../assets/notification.svg'
import { NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';
function Navbar() {
    const location = useLocation();
    const {loginStatus,user}=useAuth()
    console.log(user);
    const eduStatus = (location.pathname === '/educator/home'||location.pathname === '/educator/uploadCourses');
  const isSignup = (location.pathname === '/signup');
  return (
   <div style={eduStatus?{background:'#0E0035'}:{}} className="navbar-box">
            <div style={!loginStatus?{marginRight:'2rem'}:{}} className={eduStatus?"eduInnerbox":"innerbox"}>
                <NavLink style={{textDecoration:'none',color:'black'}} to={loginStatus?'/home':'/login'}>
                <div className="logo-container">
                    <div className="logo">
                        <span style={eduStatus?{color:'#00FF84'}:{ color:'#5928E5'}}>i</span>
                        <span style={eduStatus?{color:'#FFF'}:{}}>Learn</span>
                    </div>
                </div>
                </NavLink>
                {!eduStatus?
                <>
                <div className="categories">
                <NavLink style={{color:'black', textDecoration:'none'}}to='courses'><div>Categories</div></NavLink>
                    <div className="arrow"></div>
                </div>
                <div className="search-bar">
                    <img className={"search-icon"} src={searchIcon}/>
                    <input type='textarea'
                    placeholder='What do you want to Learn'></input>
                </div>
                <div className="popular-courses"><NavLink style={{color:'black', textDecoration:'none'}}to='courses'>Popular courses</NavLink></div>
                <NavLink to={'educator/home'} style={{color:'black', textDecoration:'none'}}><div className="teach">Teach on ilearn</div></NavLink>
{!loginStatus?
                <div className="sign-up" >{isSignup ? (
            <NavLink className={"navLink"} to="/login">Log in</NavLink>
          ) : (
            <NavLink className={"navLink"} to="/signup">Sign up</NavLink>
          )}
</div>:<div className='navIcons'>
    <img src={notification}/>
    <NavLink style={{height:'18px'}} to={'/cartPage'}><img src={cart} alt="" /></NavLink>
    <NavLink style={{height:'18px'}} to={'/learning/3'}><img src={heart} /></NavLink>
    <NavLink to={'/profilePage'} style={{textDecoration:'none'}}>
    <div className='pfpNav'>
    {user&&user.name.charAt(0).toUpperCase()}
    </div>
    </NavLink>
      </div>}
            </>:<div className='secEdu'>
            <NavLink to={'/educator/uploadCourses'}  style={{textDecoration:'none'}}><div className='uploadCourses'>Upload courses</div></NavLink>
            <div style={{border:'2px solid #00FF84'}} className='pfpNav'>
            {user&&user.name.charAt(0).toUpperCase()}
    </div>
                </div>}
        </div>
        </div>
  )
}

export default Navbar