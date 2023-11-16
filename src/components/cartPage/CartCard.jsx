import React from 'react'
import Stars from '../utils/Stars'
import heartFilled from '../../assets/heartFilled.svg'
import heart from '../../assets/heart.svg'
import trash from '../../assets/trash.svg'


function CartCard(props) {
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
            <div className='cartCardWishlist'>
                <img src={heart}/> Add to the wishlist
            </div>
            <div className='cartCardTrash' onClick>
                <img src={trash}/> Remove from cart
            </div>
            </div>
        </div>
    </div>
  )
}

export default CartCard