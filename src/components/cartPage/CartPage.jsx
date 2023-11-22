import React, { useEffect, useState } from 'react'
import CartCard from './CartCard'
import './cartPage.css'
import TeachFooter from '../utils/TeachFooter'
import Footer from '../home/Footer'
import empty from '../../assets/empty.svg'
import { Link } from 'react-router-dom'
import axios from '../../api/axios'
import { toast } from 'react-toastify'
import { useAuth } from '../utils/AuthContext'
import useRazorpay from 'react-razorpay'
function CartPage() {
  const BaseUrl='https://udemy-nx1v.onrender.com/'
const {user}=useAuth();
  const [cartTotal,setTotal]=useState(0);
  const [cartItem,setCart]=useState([]);
  const[key1,setKey]=useState({});
  let total=0;
  const config = { headers: {'Authorization':`Bearer ${localStorage.getItem('authId')}`}, withCredentials: false };
  useEffect(()=>
  {
      const getCart = async () => {
        try {
          console.log("loading")
          const response = await  axios.get('/get-cart',config);
          setCart(response.data.data.courses)
        } catch (error) {
          console.log('err_',error.response.status);
        
      };}
    getCart();
    console.log(cartItem)
    
  },[])
    for(let i=0;i<cartItem.length;i++)
    {
      total=total+parseInt(cartItem[i].price);
    }
  const handlePayment = async () => {
    try {
      const response = await axios.post(
        `createOrder/${cartItem[0]._id}`,
        config
      );
      console.log(response.data);
      setKey(response.data);
    } catch (error) {
      console.error("Error creating order:", error.response.data);
      return null;
    }
  const options = await getRazorpayOptions();
    const rzp1 = new Razorpay(options);
    console.log(rzp1);
    rzp1.on("payment.failed", function (response) {
      console.log(response.error);})
      rzp1.open();
    };
   
  const [Razorpay] = useRazorpay();
  const getRazorpayOptions = async () => {
    return {
      key: key1.key_id,
      amount: key1.order.amount,
      currency: "INR",
      name: "iLearn",
      description: "Online Course",
      image: '',
      order_id: key1.order_id,
      handler: function (response) {
        console.log("response", response);
        console.log();
        checkPaymentStatus(
          response.razorpay_order_id,
          response.razorpay_payment_id,
          response.razorpay_signature,
        )
          .then((result) => {
            console.log("Payment Status:", result);
          })
          .catch((error) => {
            console.error("Error checking payment status:", error);
          });
      },
      prefill: {
        name: user.name,
        email: user.email,
      },
      notes: {
        address: "iLearn Pvt.",
      },
      theme: {
        color: "#5928E6",
      },
    };
  }
  const checkPaymentStatus = async (
    order_id,
    payment_id,
    signature,
    subscriptionType
  ) => {
    console.log(order_id, payment_id, signature, subscriptionType);
    try {
      const response = await axios.post(
        `/checkPayment/${cartItem[0]._id}`,
        { order_id, payment_id, signature},
        config
      );
      console.log("hellyeh");
      return response.data;
    } catch (error) {
      console.error("Error checking payment status:", error);
    }
  };

  return (
    <div>
      <div className='cartPage'>
      <div className='cartBanner'>
        Your cart {}
      </div>
      <div className='cartSection'>
        {cartItem.length?cartItem.length:''} courses in cart
        {0?<div className='emptySec'>
          <img src={empty} />
        <Link to='/courses'><button className='cartButton'>Explore Course now</button></Link>
        </div>:
        <div className='cartSec'>
        <div className='cartCards'>
        {cartItem.map(item=>(<CartCard img={`${BaseUrl}${item.thumbnail}`} title={item.title} cost={item.price} createdBy={item.createdBy} rating={item.rating} id={item._id} />))}
        

        </div>
        <div className='cartTotal'>
        Total <div className='cartCost'>{total}<span>&#40;incl. of all taxes&#41;</span></div>
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