import React from 'react'
import Slider from 'react-slick';
import Card from './Card';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './home.css'
import { useState,useEffect } from 'react';
import axios from '../../api/axios';
const C_URL='https://udemy-nx1v.onrender.com/getCategoriesData'
function PopularCourses({categoryName}) {
  const token=localStorage.getItem("authId");
  const config = { headers: {'Authorization':`Bearer ${token}`}, withCredentials: false }
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        console.log("loading")
        const response = await  axios.get(C_URL,config);
        const categoryData = response.data.data.categories.find(category => category.name === categoryName);
        setCourses(categoryData ? categoryData.courses : []);
        console.log(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [categoryName]);

        var settings = {
          dots: false,
          infinite: false,
          arrows:true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 0,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 750,
              settings: {
                slidesToShow: 2.5,
                slidesToScroll: 1,
                initialSlide: 0
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 0
              }
            },
            {
              breakpoint: 450,
              settings: {
                slidesToShow: 1.5,
                slidesToScroll: 1
              }

            },
            {
              breakpoint: 325,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
              
            }
          ]
        }     
  return (
    <div className='popularCourse'>
    <div className='subHeadingHome'>Top selling {categoryName} courses</div>
    <button className='popularButton'>Explore all</button>
    <div className='slid'>
    <Slider className=''{...settings}>
     {courses.map(course => (
            <Card
              key={course._id} imgSrc={course.courseImage}
              title={course.title} creator={course.createdBy.username}
                        rating={course.rating}
      cost={course.price}
            />))}
</Slider>
</div>
    </div>
  )
}

export default PopularCourses