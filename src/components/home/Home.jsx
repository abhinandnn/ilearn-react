import React from 'react'
import './home.css'
import Card from './Card'
import PopularCourses from './PopularCourses'
import bannerImg from '../../assets/bannerImg.svg'
import { Link } from 'react-router-dom'
function Home() {
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
      <span className='subHeadingHome'>Variety of courses to build up your skills</span>
      <p>Choose from over 210,000 online video courses</p>
      <ul className='catBar'>
        <li className='catItem'><Link className='catLink'>Python</Link></li>
        <li className='catItem'><Link className='catLink'>UI/UX</Link></li>
        <li className='catItem'><Link className='catLink'>Web Development</Link></li>
        <li className='catItem'><Link className='catLink'>Javascript</Link></li>
        <li className='catItem'><Link className='catLink'>C++</Link></li>
        <li className='catItem'><Link className='catLink'>Flutter</Link></li>
      </ul>
      <PopularCourses courseName={"Python"}/>
      </div>
        <Card
        cost='899'
        title='lksncjds clkdsnlcnsd ckdncknsd lwknd'
        creator='Abhinandan'
        rating='4.2'
        imgSrc='https://picsum.photos/200/150'
        />
    </div>
  )
}

export default Home