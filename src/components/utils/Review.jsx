import React, { useState } from 'react'
import star1 from '../../assets/star1.svg'
import Stars from './Stars'


function Review(props) {
    // const [isVideoPage, setPage]=useState(false)
    // const setP=(val)=>setPage(val);
    // setP(props.isVideoPage);
  return (
    <div className='reviewBox' style={{background:`${props.isVideoPage?'transparent':''}`}}>
        {props.isVideoPage? <></> :<div className='reviewHeading'>{props.avgRating}{<img src={star1} />}</div>}
        <div className='reviewHeading2'><p>User reviews</p>
        <span>See all</span>
        </div>
        <div className='reviewBox1'>
        <div className='reviewDetail'>
        <div className='reviewDet'>
        <div style={{minWidth:'2.6rem',minHeight:'2.6rem'}}className='pfpNav'>
        {props.name.charAt(0).toUpperCase()}
        </div>
            <div className='reviewRating'>
            <p style={{fontSize:'1.1rem',fontWeight:'600'}}>{props.name}</p>
                <p style={{fontSize:'0.75rem'}}><Stars stars={props.rating1}/>{props.rating1} </p>
            </div>
            </div>

            <p className='dateRev'>{props.date}</p>
        </div>
        <p style={{fontSize:'1.1rem',fontWeight:'400'}}>{props.text}</p>
        </div>
        <div className='reviewBox1'>
        <div className='reviewDetail'>
        <div className='reviewDet'>
        <div style={{minWidth:'2.6rem',minHeight:'2.6rem'}}className='pfpNav'>
        {props.name.charAt(0).toUpperCase()}
        </div>
            <div className='reviewRating'>
            <p style={{fontSize:'1.1rem',fontWeight:'600'}}>{props.name}</p>
                <p style={{fontSize:'0.75rem'}}><Stars stars={props.rating1}/>{props.rating1} </p>
            </div>
            </div>

            <p className='dateRev'>{props.date}</p>
        </div>
        <p style={{fontSize:'1.1rem',fontWeight:'400'}}>{props.text}</p>
        </div>
        <button className='RButton'>Write a review</button>
    </div>
  )
}

export default Review