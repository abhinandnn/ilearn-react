import React from 'react'
import star from "../../assets/star.svg"
import { useNavigate } from 'react-router-dom'
import trash1 from '../../assets/trash.svg'
import axios from '../../api/axios'
function Card({ke,title,creator,rating,cost,link,thumb,style,trash,reload}) {
  const navigate=useNavigate();
  const data= {id:ke};
  const navigateTo=()=>{
  navigate('/coursePage',{state:data});
  }
  const config = { headers: {'Authorization':`Bearer ${localStorage.getItem('authId')}`}, withCredentials: false }
  const delWish = async () => {
      try {
        console.log("loading")
        const response = await axios.delete(`/delete-wishlist/${ke}`,config);
        console.log(response);
        reload();
      } catch (error) {
        console.log('err',error.response);
    };}
  return (
    <div className='card36'>
    <div className='cardCont' id={style} >
        <div id='cardI'>{thumb&&<img id='cardImg' src={`https://ilearn.varankit.tech/${thumb}`}/>}</div>
        <div id='tite'>{title}</div>
        <div className='creatorName'>
            {creator}
            <div className='rating'>{rating}<img className='star' src={star}/></div>
        </div>
        <p className='costCard'>₹{cost}</p>
        <button className='homeButton' onClick={navigateTo}>Know more</button>
        {trash?<img className='trashBut' src={trash1} onClick={delWish}/>:<></>}
    </div>
    </div>
  )
}

export default Card
