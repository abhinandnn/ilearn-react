import React, { useState,useEffect } from 'react'
import './learning.css'
import TeachFooter from '../utils/TeachFooter';
import Footer from '../home/Footer';
import LearningCard from '../utils/LearningCard';
import { useParams } from 'react-router-dom';
import Card from '../home/Card';
import axios from '../../api/axios';
function Learning() {
    const { navOptFromUrl } = useParams();
    const [navOpt, setNav] = useState(navOptFromUrl);
    const [wishlist,setWish]=useState([]);
    const [owned,setOwned]=useState([]);
    const [completed,setCompleted]=useState([])
    useEffect(()=>
  {
      const getWish = async () => {
        try {
          const response = await  axios.get('/get-wishlist',config);
          setWish(response.data.data.wishlist)
          console.log('ok',response.data.data)

        } catch (error) {
        //   console.log('err_',error.response.status);
        
      };}
    getWish();    
  },[])
    useEffect(() => {
        setNav(navOptFromUrl);
      }, [navOptFromUrl]);
  const config = { headers: {'Authorization':`Bearer ${localStorage.getItem('authId')}`}, withCredentials: false }
      useEffect(()=>{const getData = async () => {
        try {
          console.log("loading")
          const response = await  axios.get('/get-ownedCourses',config);
          setOwned(response.data.data.ownedCourse);
          console.log(response.data.data.ownedCourse);
        } catch (error) {
          console.log(error);
        }
      }
    getData();},[])
    useEffect(()=>{const getCompleted = async () => {
      try {
        console.log("loading")
        const response = await  axios.get('/completed-course',config);
        setCompleted(response.data.data.completedCourse);
        console.log(response.data.data.ownedCourse);
      } catch (error) {
        console.log(error);
      }
    }
  getCompleted();},[])
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
            {owned&&owned.map(own=>
            {!(own.totalVideos===own.completedVideo)?
            <LearningCard _id={own.courseid} totalLect={own.totalVideos} completedLect={own.completedVideo} title={own.title} category={own.category}/>:<></>})}
            </div>}
            {navOpt==='2'&&
        <div className='contentGrid'>
          {completed&&completed.map(own=>
            <LearningCard _id={own.courseid} totalLect={10} completedLect={10} title={own.title} category={own.category}/>)}
            </div>}
            {navOpt==='3'&&
            <div className="slid" id="slid1">
            {wishlist.map((course) => (
                <Card
                ke={course._id}
                imgSrc={course.courseImage}
            title={course.title}
                        creator={course.category}
                rating={course.rating}
                cost={course.price}
                thumb={course.thumbnail}
              />
            ))}
            </div>
            }
        </div>
        <TeachFooter/>
        <Footer/>
    </div>
  )
}

export default Learning