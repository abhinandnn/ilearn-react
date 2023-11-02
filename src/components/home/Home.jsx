import React from 'react'
import './home.css'
import Card from './Card'
import bannerImg from '../../assets/bannerImg.svg'
function Home() {
  return (
    <div className="homePage">
      <div className='topBanner'>
        <div className='bannerText'>
        Unlock Your Potential with us
        </div>
        <img src={bannerImg} id='bannerImg'/>
      <div className='bannerText2'>
      Explore our online courses and find the perfect course for your goals.
      </div>
      <button className='homeButton' id='bannerButton'>
        Explore Courses
      </button>
      </div>
        {/* <Card
        cost='899'
        title='lksncjds clkdsnlcnsd ckdncknsd lwknd'
        creator='Abhinandan'
        rating='4.2'
        imgSrc='https://picsum.photos/200/150'
        /> */}
    </div>
  )
}

export default Home