import React from 'react'
import Stars from '../utils/Stars'
import heartFilled from '../../assets/heartFilled.svg'
import heart from '../../assets/heart.svg'
import trash from '../../assets/trash.svg'
import axios from '../../api/axios'
import { useState } from 'react'
import { toast } from 'react-toastify'

function CartCard(props) {
    const config = { headers: {'Authorization':`Bearer ${localStorage.getItem('authId')}`}, withCredentials: false }
const delCart = async () => {
    try {
      console.log("loading")
      const response = await axios.delete(`/delete-cart/${props.id}`,config);
      console.log(response);
      props.reload();
    } catch (error) {
      console.log('err',error.response);
  };}
  const addWish = async () => {
    try {
      if(!wish1)
      {console.log(config);
      const response = await  axios.post(`/add-wishlist/${props.id}`,null,config);
      toast.success('course added to wishlist');
      setwish1(true);}
    } catch (error) {
      console.log('hi',error);
      toast.info(error.response.data.message);
      setwish1(true);
    }
  }
  const delWish = async () => {
    try {
      console.log("loading")
      const response = await axios.delete(`/delete-wishlist/${props.id}`,config);
      console.log(response);
      setwish1(false);
    } catch (error) {
      console.log('err',error.response);
  };}
  const[wish1,setwish1]=useState(false);
  return (
    <div className='cartCard'>
        <img className='cartCardImg' src={props.img}/>
        <div className='cartCardDet'>
            <div className='cartCardText'>
                <p>{props.title}</p>
                <span>₹{props.cost}</span>
            </div>
            <span>{props.createdBy}</span>
            <div className='cartCardOpts'>
            <div className='cartCardStars'>{props.rating} <Stars stars={props.rating}/></div>
            <>
                {!wish1?<div  className='cartCardWishlist' onClick={addWish}><img src={heart}/> Add to the wishlist</div>:<div  className='cartCardWishlist' onClick={delWish}><img src={heartFilled}/> Added to the wishlist</div>}
            </>
            <div className='cartCardTrash' onClick={delCart}>
                <img src={trash}/> Remove from cart
            </div>
            </div>
        </div>
    </div>
  )
}

export default CartCard