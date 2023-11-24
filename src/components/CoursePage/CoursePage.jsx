import React from 'react'
import './coursePage.css'
import Stars from '../utils/Stars'
import Review from '../utils/Review'
import { useState,useEffect } from 'react';
import draw from '../../assets/draw.svg'
import Footer from '../home/Footer';
import playB from '../../assets/playB.svg'
import heart from '../../assets/heart1.svg'
import files from '../../assets/files.svg'
import cert from '../../assets/certificate.svg';
import subt from '../../assets/subtitle.svg'
import access from '../../assets/access.svg'
import TeachFooter from '../utils/TeachFooter';
import AppPromote from '../utils/AppPromote';
import axios from '../../api/axios';
import { useLocation } from "react-router-dom";
import { toast } from 'react-toastify';
import useRazorpay from 'react-razorpay'
import { useAuth } from '../utils/AuthContext';
import heartfill from '../../assets/heartfill.svg'
function CoursePage() {
  const location = useLocation();
const {user}=useAuth();
const[wish1,setwish1]=useState(false);
  const _id = location.state.id;
  const [course, setCourse] = useState(
    {category: null,
      createdAt: null,
      createdBy: null,
      description: null,
      duration: null,
      isPublished: null,
      ownedBy: null,
      price: null,
      rating: null,
      ratings: null,
      reviews: null,
      title: null,
      totalStudents: null,
      updatedAt: null,
      videos: null
    }
  );
  const [creator, setCreator]=useState(
    {}
  )
  const[videoOk,setVideo]=useState([])
  const[review,setReview]=useState({});
  const config = { headers: {'Authorization':`Bearer ${localStorage.getItem('authId')}`}, withCredentials: false }

  const addCart = async () => {
    try {
      console.log(config);
      const response = await  axios.post(`/add-cart/${_id}`,null,config);
      toast.success('course added successfully');
    } catch (error) {
      console.log('hi',error);
      toast.info(error.response.data.message);
    }
  }
  const addWish = async () => {
    try {
      if(!wish1)
      {console.log(config);
      const response = await  axios.post(`/add-wishlist/${_id}`,null,config);
      toast.success('course added to wishlist');
      setwish1(true);}
    } catch (error) {
      console.log('hi',error);
      toast.info(error.response.data.message);
      setwish1(true);
    }
  }
  useEffect(() => {
    console.log(`/getCourseById/${_id}`);
    const getData = async () => {
      try {
        console.log("loading")
        const response = await  axios.get(`/getCourseById/${_id}`,config);
        console.log("InitReques--------------------------------------")
      console.log(config);
        setCreator(response.data.data.course.createdBy)
        setCourse(response.data.data.course)
        setVideo(response.data.data.course.videos)
console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    const getData1=async()=>{
      try {
        console.log("loading Review")
        const response = await  axios.get(`/get-review/${_id}`,config);
        setReview(response);
console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  getData();
getData1();
},[])
const handlePayment = async () => {
  let key1;
  try {
    const response = await axios.post(
      `createOrder/${_id}`,null,
      config
    );
    console.log(response.data);
    key1=response.data;
  } catch (error) {
    console.error("Error creating order:", error.response.data);
    return null;
  }
const options = await getRazorpayOptions(key1);
  const rzp1 = new Razorpay(options);
  console.log(rzp1);
  rzp1.on("payment.failed", function (response) {
    console.log(response.error);})
    rzp1.open();
  }
 
const [Razorpay] = useRazorpay();
const getRazorpayOptions = async (key1) => {
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
      `/checkPayment/${_id}`,
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
    <div className='coursePage'>
      <div className='topSec'>
        <div className='topBanner1'>
            <div className='imageDiv1'><img className='bannerImg1' src={`https://udemy-nx1v.onrender.com/${course.thumbnail}`}/></div>
            <div className='bannerText1'>{course.title}
            <div className='ratingStar1'>{course.rating}
              <Stars stars={course.rating}/></div>
            <div className='creatorName1'>Course by : {creator.name}
            <span>{course.createdAt?course.createdAt.slice(0,10):''}</span></div>
        </div>
        </div>
        <div className='courseDetails'>
        <div className='detailSec'>{course.totalStudents < 10 ? `0${course.totalStudents}` : `${course.totalStudents}`??null}
        <span >Active learners</span></div>
        <div className='detailSec' id='ds1'>{videoOk?videoOk.length:''}<span>Lectures</span></div>
        <div className='detailSec' id='ds2'>10<span>Hours</span></div>
        <div className='fixCar'>
        <div className='fixedCard'>
        <div className='fixCard1'>
          <div className='preve'><img src={playB}/>Preview this course</div>
        <div className='pSec'> <div className='pricingCard'><span>Course pricing</span>₹{course.price}</div><img src={wish1?heartfill:heart} onClick={addWish}/></div>
        <button className='courseCButton' id='C2' onClick={handlePayment}>Buy now</button>
        <button className='courseCButton' onClick={addCart}>Add to cart</button>
        </div>
        <div className='fixCard2'>
          <p>Additional</p>
          <div className='fc1'>
            <div className='fc2'><img src={cert}/>Certificate: Provided</div>
            <div className='fc2'><img src={subt}/>Subtitles: English/Hindi</div>
            <div className='fc2'><img src={files}/>Files: 10 additional files</div>
            <div className='fc2'><img src={access}/>Access: Lifetime Acces</div>
          </div>
        </div>
        </div>
        </div>
    </div>
    <div className='aboutCourse'>
      <h1>About this course</h1>
      <p>{course.description}</p>
      <h1>Your Tutor</h1>
      <div className='creatorIntro'>
        <img src={`https://udemy-nx1v.onrender.com${creator.profileimg}`} style={{height:'10rem',width:'10rem',borderRadius:'100%'}}/>
        <div className='creatorInt'>
          <h1>{creator.name}</h1>
          <p>{creator.domain}</p>
          <p>{creator.bio}</p>
        </div>
      </div>
      </div>
      <div style={{paddingLeft:'10vw'}}>
      <Review isVideoPage={false} avgRating={course.rating} name={'Abhi'} rating1={4} date={'21 Nov 2023'} text={`I really liked the course, everything is clear and understandable. A lot of useful information that you can't find on the Internet. On the course you will learn what 3D motion design is, how to work with 3D programs, learn how to create animated models, as well as create and animate videos.`}/>
      </div>
      </div>
      <AppPromote/>
      <TeachFooter/>
    <Footer/>
    </div>
  )
}

export default CoursePage
