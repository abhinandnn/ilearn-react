import React from 'react'
import star from "../../assets/star.svg"
import { useNavigate } from 'react-router-dom'
function Card({ke,imgSrc,title,creator,rating,cost,link,thumb}) {
  const navigate=useNavigate();

  const data= {id:ke};
  const navigateTo=()=>{
  navigate('/coursePage',{state:data});
  }
  return (
    <div className='card36'>
    <div className='cardCont' id={style} >
        <div id='cardI'>{thumb&&<img id='cardImg' src={`https://udemy-nx1v.onrender.com/${thumb}`}/>}</div>
        <div id='tite'>{title}</div>
        <div className='creatorName'>
            {creator}
            <div className='rating'>{rating}<img className='star' src={star}/></div>
        </div>
        <p className='costCard'>₹{cost}</p>
        <button className='homeButton' onClick={navigateTo}>Know more</button>
    </div>
    </div>
  )
}

export default Card
