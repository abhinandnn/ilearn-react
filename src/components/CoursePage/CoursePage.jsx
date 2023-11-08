import React from 'react'
import './coursePage.css'
import Stars from './Stars'
import { useState,useEffect,useRef } from 'react';
import draw from '../../assets/draw.svg'
function CoursePage(props) {
  const fixedCardRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const topSec = document.querySelector('.topSec');
      const topSecTop = topSec.offsetTop;
      const topSecHeight = topSec.offsetHeight;
      const scrollY = window.scrollY;

      if (scrollY > topSecTop && scrollY < topSecHeight) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className='coursePage'>
      <div className='topSec'>
        <div className='topBanner1'>
            <div className='imageDiv1'><img className='bannerImg1'src={props.img1}/></div>
            <div className='bannerText1'>{props.courseTitle}
            <div className='ratingStar1'>{props.star}
              <Stars stars={props.star}/></div>
            <div className='creatorName1'>Course by:{props.creator}
            <span>{props.date}</span></div>
        </div>
        </div>
        <div className='courseDetails'>
        <div className='detailSec'>{props.learner < 10 ? `0${props.learner}` : `${props.learner}`}
        <span >Active learners</span></div>
        <div className='detailSec' id='ds1'>41<span>Lectures</span></div>
        <div className='detailSec' id='ds2'>40<span>Hours</span></div>
        </div>
        <div className='fixedCard'><img className='drawE' src={draw}/><div className='fixCard1'></div>
        <div className='fixCard2'></div>
    </div>
    </div>
    </div>
  )
}

export default CoursePage