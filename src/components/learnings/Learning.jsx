import React, { useState,useEffect } from 'react'
import './learning.css'
import TeachFooter from '../utils/TeachFooter';
import Footer from '../home/Footer';
import LearningCard from '../utils/LearningCard';
import { useParams } from 'react-router-dom';
function Learning() {
    const { navOptFromUrl } = useParams();
    const [navOpt, setNav] = useState(navOptFromUrl);
    useEffect(() => {
        setNav(navOptFromUrl);
      }, [navOptFromUrl]);
  return (
    <div className='learning'>
        <div className='learningBanner'>
        <div className='learningStatement'>
            Your Learnings
        </div>
        <div className='learningNav'>
            <div className={`learningOpt ${navOpt==='active'?'learnSelected':''}`} onClick={() => setNav('active')} >Active couses</div>
            <div className={`learningOpt ${navOpt==='complete'?'learnSelected':''}`} onClick={() => setNav('complete')}>Completed courses</div>
            <div className={`learningOpt ${navOpt==='wishlist'?'learnSelected':''}`} onClick={() => setNav('wishlist')}>Your Wishlist</div>
        </div>
        </div>
        <div className='learningContent'>
        {navOpt==='active'&&
        <div className='contentGrid'>
            <LearningCard totalLect={16} completedLect={9} title={'Complete Web Design: from Figma to Webflow to Freelancing '} category={'Development'}/>
            <LearningCard totalLect={16} completedLect={5} title={'Complete Web Design: from Figma to Webflow to Freelancing '} category={'Development'}/>
            <LearningCard totalLect={16} completedLect={9} title={'Complete Web Design: from Figma to Webflow to Freelancing '} category={'Development'}/>
            </div>}
            {navOpt==='complete'&&
        <div className='contentGrid'>
            <LearningCard totalLect={16} completedLect={16} title={'Complete Web Design: from Figma to Webflow to Freelancing '} category={'Development'}/>
            </div>}
        </div>
        <TeachFooter/>
        <Footer/>
    </div>
  )
}

export default Learning