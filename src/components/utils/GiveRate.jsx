import React from 'react'
import star1 from '../../assets/star1.svg'

function GiveRate(props) {
  return (
    <div className='rateCard'>
        <div className='reviewHeading'>{props.avgRating}{<img src={star1} />}</div>
        <span>&#40;{props.reviewNo} reviews&#41;
</span>
        <button className='RButton' id='RaButton' onClick={()=>props.revClick()}>Leave a rating</button>
    </div>
  )
}

export default GiveRate