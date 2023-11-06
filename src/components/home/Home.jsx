import React from 'react'
import './home.css'
import Card2 from './Card2'
import PopularCourses from './PopularCourses'
import bannerImg from '../../assets/bannerImg.svg'
import { Link } from 'react-router-dom'
import WhyIlearn from './WhyIlearn'
import Footer from './Footer'
import CoursePage from '../CoursePage/CoursePage'
import { useState,useEffect,useRef } from 'react'
function Home() {
  const [selectedCategory, setCategory] = useState('Python');
  const linkRef = useRef(null)
  const handleCategoryClick = (categoryName) => {
    setCategory(categoryName);
  };
  useEffect(() => {
      linkRef.current.focus();
  }, []);
  return (
    <div className="homePage">
      <div className='topBanner'>
        <div>
        <div className='bannerText'>
        Unlock Your Potential with us
        </div>
      <div className='bannerText2'>
      Explore our online courses and find the perfect course for your goals.
      </div>
      <button className='homeButton' id='bannerButton'>
        Explore Courses
      </button>
      </div>
      <img src={bannerImg} id='bannerImg'/>

      </div>
      <div className='categoriesDisplay'>
      <span className='subHeadingHome' id='phoneSubHeading'>Variety of courses to build up your skills</span>
      <p>Choose from over 210,000 online video courses</p>
      <ul className='catBar'>
        <li className='catItem'><Link ref={linkRef} className='catLink' autoFocus onClick={() => handleCategoryClick('Python')}>Python</Link></li>
        <li className='catItem'><Link className='catLink' onClick={() => handleCategoryClick('UI/UX')}>UI/UX</Link></li>
        <li className='catItem'><Link className='catLink' onClick={() => handleCategoryClick('Web Development')}>Web Development</Link></li>
        <li className='catItem' id='catItem2'><Link className='catLink' onClick={() => handleCategoryClick('Javascript')}>Javascript</Link></li>
        <li className='catItem' id='catItem2'><Link className='catLink' onClick={() => handleCategoryClick('C++')}>C++</Link></li>
        <li className='catItem' id='catItem2'><Link className='catLink' onClick={() => handleCategoryClick('Flutter')}>Flutter</Link></li>
      </ul>
      <PopularCourses categoryName={selectedCategory}/>
      </div>
        <WhyIlearn/>
        <Footer/>
    </div>
  )
}

export default Home