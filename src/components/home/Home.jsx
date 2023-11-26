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
import { useNavigate } from 'react-router-dom'
import axios from '../../api/axios'
function Home() {
  const navigate=useNavigate()
  const [categories,setCategories]=useState([]);
  const [selectedCategory, setCategory] = useState();
  const handleCategoryClick = (categoryName) => {
    setCategory(categoryName);
  };
  const config = { headers: {'Authorization':`Bearer ${localStorage.getItem("authId")}`}, withCredentials: false }
  useEffect(()=>{
  const getCat = async () => {
    try {
      console.log("loadingCat")
      const response = await  axios.get('/getCategoriesName',config);
      setCategories(response.data.value.data.categories);
      setCategory(response.data.value.data.categories[0]);
      console.log(response.data.value.data.categories);
    } catch (error) {
      console.log("catNameError",error);
    }
  };
  getCat();
},[])
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
      <button className='homeButton' id='bannerButton' onClick={()=>navigate('/courses')}>
        Explore Courses
      </button>
      </div>
      <img src={bannerImg} id='bannerImg'/>
      </div>
      <div className='categoriesDisplay'>
      <span className='subHeadingHome' id='phoneSubHeading'>Variety of courses to build up your skills</span>
      <p>Choose from over 210,000 online video courses</p>
      <ul className='catBar'>
      {categories.map((category, index) => (
        <li key={index} className='catItem'>
          <NavLink
            className={`catLink ${selectedCategory === category ? 'catLinkActivated' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </NavLink>
        </li>
      ))}
      </ul>
      <PopularCourses categoryName={selectedCategory}/>
      </div>
        <WhyIlearn/>
        <Footer/>
    </div>
  )
}

export default Home