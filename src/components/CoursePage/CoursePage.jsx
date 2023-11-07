import React from 'react'
import './coursePage.css'
import Stars from './Stars'
function CoursePage(props) {
  // console.log(img1)
  return (
    <div className='coursePage'>
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
        <div className='detailSec'>{props.learners < 10 ? `0${props.learner}` : `${props.learner}`}</div>
        <div className='detailSec'></div>
        <div className='detailSec'></div>
        <div>
        </div>
    </div>
    </div>
  )
}

export default CoursePage