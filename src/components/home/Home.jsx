import React from 'react'
import './home.css'
import Card2 from './Card2'
import PopularCourses from './PopularCourses'
import bannerImg from '../../assets/bannerImg.svg'
import { NavLink } from 'react-router-dom'
import WhyIlearn from './WhyIlearn'
import Footer from './Footer'
import CoursePage from '../CoursePage/CoursePage'
import { useState,useEffect,useRef } from 'react'
function Home() {
  const [selectedCategory, setCategory] = useState('Python');
  const handleCategoryClick = (categoryName) => {
    setCategory(categoryName);
  };
  
  return (
    <div className="homePage">
      <div className='logoMobile' id='logoMob'><span style={{color:"#5928E5"}}>i</span>Learn</div>
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
        <li className='catItem'><NavLink  className={`catLink ${selectedCategory==='Python'?'catLinkActivated':''}`} onClick={() => handleCategoryClick('Python')}>Python</NavLink></li>
        <li className='catItem'><NavLink  className={`catLink ${selectedCategory==='UI/UX'?'catLinkActivated':''}`} onClick={() => handleCategoryClick('UI/UX')}>UI/UX</NavLink></li>
        <li className='catItem'><NavLink className={`catLink ${selectedCategory==='Web Development'?'catLinkActivated':''}`} onClick={() => handleCategoryClick('Web Development')}>Web Development</NavLink></li>
        <li className='catItem' id='catItem2'><NavLink className={`catLink ${selectedCategory==='Javascript'?'catLinkActivated':''}`} onClick={() => handleCategoryClick('Javascript')}>Javascript</NavLink></li>
        <li className='catItem' id='catItem2'><NavLink className={`catLink ${selectedCategory==='C++'?'catLinkActivated':''}`} onClick={() => handleCategoryClick('C++')}>C++</NavLink></li>
        <li className='catItem' id='catItem2'><NavLink className={`catLink ${selectedCategory==='Flutter'?'catLinkActivated':''}`} onClick={() => handleCategoryClick('Flutter')}>Flutter</NavLink></li>
      </ul>
      <PopularCourses categoryName={selectedCategory}/>
      </div>
        <WhyIlearn/>
        <Footer/>
    </div>
  )
}

export default Home