import React from 'react';
import './navbar.css'
import searchIcon from '../assets/search.svg'
function Navbar() {
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
                    <div className="search-icon"><img src={searchIcon}/></div>
                    <input type='textarea'></input>
                </div>
                <div className="popular-courses">Popular courses</div>
                <div className="teach">Teach on ilearn</div>
                <div className="sign-up">Sign up</div>
            </div>
        </div>
  )
}

export default Navbar