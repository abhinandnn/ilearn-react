import React from 'react'
import star from "../../assets/star.svg"
import { useNavigate } from 'react-router-dom'
function Card({imgSrc,title,creator,rating,cost,link,index}) {
  const navigate=useNavigate();
  const navigateTo=()=>{
  navigate('/signup');
  }
  return (
    <div className='cardCont' id='cardC' key={index}>
        <div id='cardI'><img id='cardImg' src={"https://picsum.photos/200/150"}/></div>
        <div id='tite'>{title}</div>
        <div className='creatorName'>
            {creator}
            <div className='rating'>{rating}<img className='star' src={star}/></div>
        </div>
        <p className='costCard'>₹{cost}</p>
        <button className='homeButton' onClick={navigateTo}>Know more</button>
    </div>
  )
}

export default Card