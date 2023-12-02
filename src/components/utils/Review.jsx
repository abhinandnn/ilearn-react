import React, { useState } from 'react'
import star1 from '../../assets/star1.svg'
import Stars from './Stars'


function Review(props) {
  return (
    <div className='reviewBox' style={{background:`${props.isVideoPage?'transparent':''}`}}>
        {props.isVideoPage? <></> :<div className='reviewHeading'>{props.avgRating}{<img src={star1} />}</div>}
        <div className='reviewHeading2'><p>User reviews</p>
        <span>See all</span>
        </div>
        {props.review?props.review
  .filter((review) => review.comment).map((review) => (
        <div className='reviewBox1'>
       
          <div key={review._id} className='reviewDetail'>
            <div className='reviewDet'>
              <div style={{ minWidth: '2.6rem', minHeight: '2.6rem',height:'2.6rem',width:'2.6rem'}} className='pfpNav'>
                {review.user.profileimg ? (
                  <img  style={{ minWidth: '2.6rem', minHeight: '2.6rem',height:'2.6rem',width:'2.6rem'}} src={`https://ilearn.varankit.tech/${review.user.profileimg}`}/>
                ) : (
                  review.user.name.charAt(0).toUpperCase()
                )}
              </div>
              <div className='reviewRating'>
                <p style={{ fontSize: '1.1rem', fontWeight: '600' }}>{review.user.name}</p>
                <p style={{ fontSize: '0.75rem' }}>
                  <Stars stars={review.rating} /> {review.rating}
                </p>
              </div>
              </div>
          <p className='dateRev'>{new Date(review.createdAt).toLocaleDateString()}</p>

          </div>
            <p style={{minHeight:'5rem',fontSize: '1.1rem', fontWeight: '400' }}>{review.comment}</p>
      </div>)):''}
        {props.owned?<button className='RButton' onClick={()=>props.revClick()}>Write a review</button>:''}
    </div>
  )
}

export default Review
