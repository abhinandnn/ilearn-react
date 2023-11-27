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
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import useRazorpay from 'react-razorpay'
import { useAuth } from '../utils/AuthContext';
import heartfill from '../../assets/heartfill.svg'
import GiveRating from './GiveRating';
function CoursePage() {
  const navigate=useNavigate()
  const location = useLocation();
const {user}=useAuth();
const [courseData,setCourseData]=useState({
  in_wishlist:false,
  in_cart:false
})

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
    videos: null,
  }
);
  const _id = location.state.id;
  const data= {id:_id};
const navigateTo=(path)=>{
navigate(path,{state:data});
}
  const [creator, setCreator]=useState(
    {}
  )
  const[videoOk,setVideo]=useState([])
  const[review,setReview]=useState([]);
  const config = { headers: {'Authorization':`Bearer ${localStorage.getItem('authId')}`}, withCredentials: false }
const[revPage,setRevPage]=useState(1)
  useEffect(() => {
    console.log(`/getCourseById/${_id}`);
    const getData = async () => {
      try {
        console.log("loading")
        const response = await  axios.get(`/getCourseById/${_id}`,config);
        setCreator(response.data.data.course.createdBy)
        setCourse(response.data.data.course)
        setVideo(response.data.data.course.videos)
        setCourseData(response.data.data)
        console.log(response)
      } catch (error) {
        console.log(error);
      }
    };
    const getData1=async()=>{
      try {
        console.log("loading Review")
        const response = await  axios.get(`/get-reviews/${_id}?page=${revPage}&pagesize=2`,config);
        setReview(response.data.data.reviews);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  getData();
getData1();
},[_id])
  const addCart = async () => {
    try {
      console.log(config);
      const response = await  axios.post(`/add-cart/${_id}`,null,config);
      toast.success('course added successfully');
      setcart1(true)
    } catch (error) {
      console.log('hi',error);
      toast.info(error.response.data.message);
    }
  }
  const delCart = async () => {
    try {
      console.log(config);
      const response = await  axios.delete(`/delete-cart/${_id}`,config);
      setcart1(false)
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
  const delWish = async () => {
    try {
      console.log("loading")
      const response = await axios.delete(`/delete-wishlist/${_id}`,config);
      console.log(response);
      setwish1(false);
    } catch (error) {
      console.log('err',error.response);
  };}
  const[wish1,setwish1]=useState(false);
  const[cart1,setcart1]=useState(false);

  useEffect(()=>{
    setwish1(courseData.in_wishlist)
    setcart1(courseData.in_cart)
  },[courseData.in_wishlist,courseData.in_cart])
  const handlePayment1 = async () => {
    try {
      const response = await axios.post(
        `buyCourse/${_id}`,null,
        { headers: {'Authorization':`Bearer ${localStorage.getItem('authId')}`}, withCredentials: false }
      );
      toast.success(response.data.message)
      navigateTo('/learning/1');
      console.log(response.data);
    } catch (error) {
      console.error("Error creating order:", error.response.data);
      toast.error(error.response.data.message)
    }}
const handlePayment = async () => {
  let key1;
  try {
    const response = await axios.post(
      `createOrder/${course.price}`,null,
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
  signature
) => {
  console.log(order_id, payment_id, signature);
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
const[showReview,setShowReview]=useState(false)
const openReview = () => {
  setShowReview(true);
};

const closeReview = () => {
  setShowReview(false);
};
  return (
    <>
    <div className='coursePage'>
      <div className='topSec'>
        <div className='topBanner1'>
            <div className='imageDiv1'><img className='bannerImg1' src={`https://ilearn.varankit.tech/${course.thumbnail}`}/></div>
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
        <div className='detailSec' id='ds2'>{parseInt(course.duration)}<span>Hours</span></div>
        <div className='fixCar'>
        <div className='fixedCard'>
        <div className='fixCard1' style={courseData.owned?{height:'6rem'}:{}}>
          <div className='preve' onClick={()=>navigateTo(courseData.owned?'/videoPage':'/coursePage')}><img src={playB}/>{!courseData.owned?'Preview this course':'Watch the lectures'}</div>
       {!courseData.owned? <> <div className='pSec'> <div className='pricingCard'><span>Course pricing</span>₹{course.price}</div><img style={{cursor:'pointer'}} src={wish1?heartfill:heart} onClick={!wish1?addWish:delWish}/></div>
        <button className='courseCButton' id='C2' onClick={handlePayment1}>Buy now</button>
        <button className='courseCButton' onClick={!cart1?addCart:delCart}>{!cart1?'Add to cart':'Remove from cart'}</button></>:''}
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
      {creator&&((creator.profileimg)?
                (<img
                  className="circleImg"
                  src={`https://ilearn.varankit.tech/${creator.profileimg}`}
                />):(<div className='circleImg' style={{background:'black',color:'white'}}>
                  {creator.name&&creator.name.charAt(0).toUpperCase()}
                  </div>))}
        <div className='creatorInt'>
          <h1>{creator.name}</h1>
          <p>{creator.domain}</p>
          <p>{creator.bio}</p>
        </div>
      </div>
      </div>
      <div style={{paddingLeft:'10vw'}}>
      {review.length&&<Review avgRating={course.rating} owned={courseData.owned} isVideoPage={false} review={review} nextRev={setRevPage} revClick={()=>openReview()}/>}
      </div>
      </div>
      <AppPromote/>
      <TeachFooter/>
    <Footer/>
    </div>
    {showReview&&<GiveRating onClose={closeReview} id={_id}/>}
</>
  )
}

export default CoursePage
