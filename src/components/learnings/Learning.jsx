import React, { useState } from 'react'
import './learning.css'
import TeachFooter from '../utils/TeachFooter';
import Footer from '../home/Footer';
function Learning() {
    const[navOpt,setNav]=useState('active');
    const navSet=(nav)=>setNav(nav);
  return (
    <div className='learning'>
        <div className='learningBanner'>
        <div className='learningStatement'>
            Your Learnings
        </div>
        <div className='learningNav'>
            <div className={`learningOpt ${navOpt==='active'?'learnSelected':''}`} onClick={() => navSet('active')} >Active couses</div>
            <div className={`learningOpt ${navOpt==='complete'?'learnSelected':''}`} onClick={() => navSet('complete')}>Completed courses</div>
            <div className={`learningOpt ${navOpt==='wishlist'?'learnSelected':''}`} onClick={() => navSet('wishlist')}>Your Wishlist</div>
        </div>
            
        </div>
        <div className='learningContent'>

        </div>
        <TeachFooter/>
        <Footer/>
    </div>
  )
}

export default Learning