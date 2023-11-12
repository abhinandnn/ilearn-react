import React from 'react'
import './coursePage.css'
import Stars from './Stars'
import Review from './Review'
import { useState,useEffect } from 'react';
import draw from '../../assets/draw.svg'
import Footer from '../home/Footer';
import playB from '../../assets/playB.svg'
import heart from '../../assets/heart1.svg'
import files from '../../assets/files.svg'
import cert from '../../assets/certificate.svg';
import subt from '../../assets/subtitle.svg'
import access from '../../assets/access.svg'
import TeachFooter from '../utils/TeachFooter';
import AppPromote from '../utils/AppPromote';
import axios from '../../api/axios';
import { useLocation } from "react-router-dom";
function CoursePage() {
  const token=localStorage.getItem("authId");
  const location = useLocation();
  const id = location.state.id;
  const [course, setCourse] = useState(
    {category: null,
      createdAt: null,
      createdBy: null,
      description: null,
      duration: null,
      isPublished: null,
      ownedBy: null,
      price: null,
      rating: null,
      ratings: null,
      reviews: null,
      title: null,
      totalStudents: null,
      updatedAt: null,
      videos: null
    }
  );
  const [creator, setCreator]=useState(
    {}
  )
  
  const config = { headers: {'Authorization':`Bearer ${token}`}, withCredentials: false }
  useEffect(() => {
    console.log(`/getCourseById/${id}`);
    const getData = async () => {
      try {
        console.log("loading")
        const response = await  axios.get(`/getCourseById/${id}`,config);
        setCreator(response.data.data.course.createdBy)
        setCourse(response.data.data.course)
console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
  getData();},[])
  
  return (
    <div className='coursePage'>
      <div className='topSec'>
        <div className='topBanner1'>
            <div className='imageDiv1'><img className='bannerImg1'src={"https://picsum.photos/150/150"}/></div>
            <div className='bannerText1'>{course.title??null}
            <div className='ratingStar1'>{course.rating??null}
              <Stars stars={course.rating??null}/></div>
            <div className='creatorName1'>Course by : {course.creator>>null}
            <span>{course.createdAt}</span></div>
        </div>
        </div>
        <div className='courseDetails'>
        <div className='detailSec'>{course.totalStudents < 10 ? `0${course.totalStudents}` : `${course.totalStudents}`??null}
        <span >Active learners</span></div>
        <div className='detailSec' id='ds1'>415<span>Lectures</span></div>
        <div className='detailSec' id='ds2'>10<span>Hours</span></div>
        
        <div className='fixCar'>
        <div className='fixedCard'>
        <div className='fixCard1'>
          <div className='preve'><img src={playB}/>Preview this course</div>
         <div className='pSec'> <div className='pricingCard'><span>Course pricing</span>₹{course.price??null}</div><img src={heart}/></div>
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
    </div>
    <div className='aboutCourse'>
      <h1>About this course</h1>
      <p>{course.description}</p>
      <h1>Your Tutor</h1>
      <div className='creatorIntro'>
        <img src={"https://picsum.photos/150/150"} style={{borderRadius:'100%'}}/>
        <div className='creatorInt'>
          <h1>{creator.name}</h1>
          <p>Web Developer</p>
          <p>8 years+ experience</p>
        </div>
      </div>
      </div>
      <div style={{paddingLeft:'10vw'}}>
      <Review avgRating={4.8} name={'Abhi'} rating1={4} date={'21 Nov 2023'} text={`I really liked the course, everything is clear and understandable. A lot of useful information that you can't find on the Internet. On the course you will learn what 3D motion design is, how to work with 3D programs, learn how to create animated models, as well as create and animate videos.`}/>
      </div>
      </div>
      <AppPromote/>
      <TeachFooter/>
    <Footer/>
    </div>
  )
}

export default CoursePage