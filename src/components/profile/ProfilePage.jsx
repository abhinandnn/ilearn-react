import React from 'react'
import './profilePage.css'
import ProfileCards from './ProfileCards'
function ProfilePage() {
  return (
    <div className='profilePage'>
    <div className='sideStripP'>
        <div className='profileNav'>
            <div className='profileNavItem' id='profileN'>Profile</div>
            <div className='profileNavItem'>Your learnings</div>
            <div className='profileNavItem'>Wishlist</div>
            <div className='profileNavItem'>Your cart</div>
            <div className='profileNavItem'>Notification</div>
            <div className='profileNavItem'>Help</div>
            <div className='profileNavItem'>Log out</div>
        </div>
    </div>
    <div className='profileSec'>
        <div className='profileIntro'>
            <img className='circleImg' src='https://picsum.photos/200/300'/>
            <div className='profileIntroDet'>
            <div className='profileIntroText'>
                Abhinandan Pandey
                <span>@abhinandn</span>
                <span style={{marginTop:'1.2rem'}}>hellyeah@gmail.com</span>
            </div>
            <button className='editButton'>Edit profile</button>
            </div>
        </div>
        <div className='profileCert'>
            <div style={{fontSize:'1.5rem',marginBottom:'1.5rem'}}>Your certificates</div>
        <ProfileCards title='This course by abhinandan pandey is very good' createdBy='Abhinandan pandety' date='8 Nov 2023'/>
    </div>
    </div>
    </div>
  )
}

export default ProfilePage