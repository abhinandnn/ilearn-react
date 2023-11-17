import React from 'react'
import CartCard from './CartCard'
import './cartPage.css'
import TeachFooter from '../utils/TeachFooter'
import Footer from '../home/Footer'
import empty from '../../assets/empty.svg'
import { Link } from 'react-router-dom'
function CartPage() {
  return (
    <div>
      <div className='cartPage'>
      <div className='cartBanner'>
        Your cart {}
      </div>
      <div className='cartSection'>
        {0} courses in cart
        {1?<div className='emptySec'>
          <img src={empty} />
        <Link to='/courses'><button className='cartButton'>Explore Course now</button></Link>
        </div>:
        <div className='cartSec'>
        <div className='cartCards'>
        <CartCard title='Complete Web Design: from Figma to Webflow to Freelancing' cost='900'createdBy='Abhinandan' rating={4} />
        </div>
        <div className='cartTotal'>
        Total <div className='cartCost'>₹45908{}<span>&#40;incl. of all taxes&#41;</span></div>
        <button className='cartButton'>Checkout</button>
        </div>
        </div>}
      </div>
      </div>
      <TeachFooter/>
      <Footer/>
    </div>
  )
}

export default CartPage