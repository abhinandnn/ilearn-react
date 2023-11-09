import React from 'react'
import star from "../../assets/star.svg"
import { useNavigate } from 'react-router-dom'
function Card({ke,imgSrc,title,creator,rating,cost,link,style}) {
  const navigate=useNavigate();

  const data= {id:ke};
  console.log(ke,creator,rating)
  const navigateTo=()=>{
  navigate('/coursePage',{state:data});
  }
  return (
    <div className='card36'>
    <div className='cardCont' id={style} >
        <div id='cardI'><img id='cardImg' src={"https://picsum.photos/200/150"}/></div>
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