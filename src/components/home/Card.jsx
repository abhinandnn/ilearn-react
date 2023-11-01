import React from 'react'
import star from "../../assets/star.svg"
function Card() {
  return (
    <div className='cardCont'>
        <img id='cardImg' src='https://picsum.photos/200/150'/>
        <div>Lorem ispsum is simply dummy text</div>
        <div className='creatorName'>
            Abhinandan Pandey
            <p className='rating'>4.8<img className='star' src={star}/></p>
        </div>
        <p className='costCard'>₹899</p>
        <button className='homeButton'>Know more</button>
    </div>
  )
}

export default Card