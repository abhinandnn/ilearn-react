import React from 'react'
import './coursePage.css'
import Stars from './Stars'
import { useState,useEffect,useRef } from 'react';
import draw from '../../assets/draw.svg'
import Footer from '../home/Footer';
import playB from '../../assets/playB.svg'
import heart from '../../assets/heart1.svg'
import files from '../../assets/files.svg'
import cert from '../../assets/certificate.svg'
import subt from '../../assets/subtitle.svg'
import access from '../../assets/access.svg'


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
        <div className='fixedCard'><img className='drawE' src={draw}/><div className='fixCard1'>
          <div className='preve'><img src={playB}/>Preview this course</div>
         <div className='pSec'> <div className='pricingCard'><span>Course pricing</span>₹456</div><img src={heart}/></div>
         <button className='courseCButton' id='C2'>Buy now</button>
         <button className='courseCButton'>Add to cart</button>
         </div>
        <div className='fixCard2'>
          <p>Additional</p>
          <div className='fc1'>
            <div className='fc2'><img src={cert}/>Certificate: Provided</div>
            <div className='fc2'><img src={subt}/>Subtitles: English/Hindi</div>
            <div className='fc2'><img src={files}/>Files: 10 additional files</div>
            <div className='fc2'><img src={access}/>Access: Lifetime Acces</div>

          </div>
        </div>
        </div>
    </div>
    <div className='aboutCourse'>
      <h1>About this course</h1>
      <p>By the end of the course you will create simple and complex 20 3D animation You will learn the programer Effects am how to work with shapes, keyframes, etc. You! be able to animate characters logos infographics and typography You wil work such soft products Adobe A Media Encoder, Trapcode and others </p>
      <h1>Your Tutor</h1>
      <div>
        <img src={props.img1} style={{borderRadius:''}}/>
      </div>
      </div>
    {/* <Footer/> */}
    </div>
  )
}

export default CoursePage