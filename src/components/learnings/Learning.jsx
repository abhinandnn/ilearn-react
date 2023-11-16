import React, { useState,useEffect } from 'react'
import './learning.css'
import TeachFooter from '../utils/TeachFooter';
import Footer from '../home/Footer';
import LearningCard from '../utils/LearningCard';
import { useParams } from 'react-router-dom';
import Card from '../home/Card';
function Learning() {
    const { navOptFromUrl } = useParams();
    const [navOpt, setNav] = useState(navOptFromUrl);
    const [wishlist,setWish]=useState({});
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
            <div className={`learningOpt ${navOpt==='1'?'learnSelected':''}`} onClick={() => setNav('1')} >Active couses</div>
            <div className={`learningOpt ${navOpt==='2'?'learnSelected':''}`} onClick={() => setNav('2')}>Completed courses</div>
            <div className={`learningOpt ${navOpt==='3'?'learnSelected':''}`} onClick={() => setNav('3')}>Your Wishlist</div>
        </div>
        </div>
        <div className='learningContent'>
        {navOpt==='1'&&
        <div className='contentGrid'>
            <LearningCard totalLect={16} completedLect={9} title={'Complete Web Design: from Figma to Webflow to Freelancing '} category={'Development'}/>
            <LearningCard totalLect={16} completedLect={5} title={'Complete Web Design: from Figma to Webflow to Freelancing '} category={'Development'}/>
            <LearningCard totalLect={16} completedLect={9} title={'Complete Web Design: from Figma to Webflow to Freelancing '} category={'Development'}/>
            </div>}
            {navOpt==='2'&&
        <div className='contentGrid'>
            <LearningCard totalLect={16} completedLect={16} title={'Complete Web Design: from Figma to Webflow to Freelancing '} category={'Development'}/>
            </div>}
            {navOpt==='3'&&
            <div className="slid" id="slid1">
            {/* {wishlist.map((course) => (
                <Card
                ke={course._id}
                imgSrc={course.courseImage}
            title={course.title}
                        creator={course.createdBy.name}
                rating={course.rating}
                cost={course.price}
              />
            ))} */}
            </div>
            }
        </div>
        <TeachFooter/>
        <Footer/>
    </div>
  )
}

export default Learning