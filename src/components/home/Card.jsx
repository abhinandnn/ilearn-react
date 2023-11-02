import React from 'react'
import star from "../../assets/star.svg"
import { useNavigate } from 'react-router-dom'
function Card({imgSrc,title,creator,rating,cost,link}) {
  const navigate=useNavigate();
  const navigateTo=()=>{
  navigate('/signup');
  }
  return (
    <div className='cardCont'>
        <img id='cardImg' src={imgSrc}/>
        <div>{title}</div>
        <div className='creatorName'>
            {creator}
            <p className='rating'>{rating}<img className='star' src={star}/></p>
        </div>
        <p className='costCard'>₹{cost}</p>
        <button className='homeButton' onClick={navigateTo}>Know more</button>
    </div>
  )
}

export default Card