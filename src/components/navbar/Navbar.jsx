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
    const {loginStatus}=useAuth()
  const isSignup = (location.pathname === '/signup');
  return (
   <div style={!loginStatus?{paddingRight:'2rem'}:{}} className="navbar-box">
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
                <div className="popular-courses"><NavLink style={{color:'black', textDecoration:'none'}}to='courses'>Popular courses</NavLink></div>
                <div className="teach">Teach on ilearn</div>
{!loginStatus?
                <div className="sign-up" >{isSignup ? (
            <NavLink className={"navLink"} to="/login">Log in</NavLink>
          ) : (
            <NavLink className={"navLink"} to="/signup">Sign up</NavLink>
          )}
</div>:<div className='navIcons'>
    <img src={notification}/>
    <img src={cart} alt="" />
    <NavLink style={{height:'18px'}} to={'/learning/3'}><img src={heart} /></NavLink>
    <div className='pfpNav'>
        A
    </div>
      </div>}
            </div>
        </div>
  )
}

export default Navbar