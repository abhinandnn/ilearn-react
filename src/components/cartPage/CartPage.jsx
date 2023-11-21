import React, { useState } from 'react'
import CartCard from './CartCard'
import './cartPage.css'
import TeachFooter from '../utils/TeachFooter'
import Footer from '../home/Footer'
import empty from '../../assets/empty.svg'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify'
function CartPage() {
  const [cartTotal,setTotal]=useState();
  const handlePayment = async () => {
    try {
      const orderResponse = await axios.post(
        'https://api.razorpay.com/v1/orders',
        {
          amount: cartTotal,
          currency: 'INR',
          payment_capture: 1,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic rzp_test_dI5Xp4av6bmrx8',
          },
        }
      );

      const orderId = orderResponse.data.id;

      const options = {
        key: 'rzp_test_dI5Xp4av6bmrx8',
        amount: orderResponse.data.amount,
        currency: orderResponse.data.currency,
        name: 'iLearn',
        description: 'Online Course',
        image: '',
        order_id: orderId,
        prefill: {
          name: '',
          email: '',
        },
        handler: function(response) {
          
          toast('Payment successful: ' + response.razorpay_payment_id);
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Error creating order:', error);
    }
  }

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
        <button className='cartButton' onClick={handlePayment}>Checkout</button>
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