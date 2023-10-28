import React from 'react';
import './navbar.css'
import searchIcon from '../../assets/search.svg'
import { NavLink, useLocation } from 'react-router-dom';
function Navbar() {
    const location = useLocation();
  const isSignup = (location.pathname === '/signup');
  return (
   <div className="navbar-box">
            <div className="innerbox">
                <div className="logo-container">
                    <div className="logo">
                        <span style={{ color: '#5928E5' }}>i</span>
                        Learn
                    </div>
                </div>
                <div className="categories">
                    <div>Categories</div>
                    <div className="arrow"></div>
                </div>
                <div className="search-bar">
                    <img className={"search-icon"} src={searchIcon}/>
                    <input type='textarea'
                    placeholder='What do you want to Learn'></input>
                </div>
                <div className="popular-courses">Popular courses</div>
                <div className="teach">Teach on ilearn</div>
                <div className="sign-up" >{isSignup ? (
            <NavLink className={"navLink"} to="/login">Log in</NavLink>
          ) : (
            <NavLink className={"navLink"} to="/signup">Sign Up</NavLink>
          )}
</div>
            </div>
        </div>
  )
}

export default Navbar