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
          initialSlide:0
        }
      },
      {
        breakpoint: 800,
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
          slidesToScroll: 1,
          initialSlide:0
        }

      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide:0
        }
        
      }
    ]
  }  

  const config = { headers: {'Authorization':`Bearer ${token}`}, withCredentials: false }
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        console.log("loading")
        const response = await  axios.get(C_URL,config);
        console.log("lol",response.data.value.data)
        const categoryData = response.data.value.data.categories.find(category => category.name === categoryName);
        setCourses(categoryData ? categoryData.courses : []);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [categoryName]);
  return (
    <div className='popularCourse'>
    <div className='subHeadingHome' id='shh1'>Top selling {categoryName} courses</div>
    <button className='popularButton'>Explore all</button>
    <div className='slid'>
    {courses.length>0 && <Slider className=''{...settings}>
     {courses.map(course=>(
      <Card
                      key={course._id}
                      imgSrc={course.courseImage}
                      title={course.title}
                      creator={course.createdBy.name}
                      rating={course.rating}
                      cost={course.price}
                    />     ))}
</Slider>}
</div>
    </div>
  )
}

export default PopularCourses