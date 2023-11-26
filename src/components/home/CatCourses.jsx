import React, { useEffect, useState } from "react";
import Card from "./Card";
import Slider from "react-slick";
import { useLocation } from "react-router-dom";
import axios from "../../api/axios";
import TeachFooter from "../utils/TeachFooter";
import Footer from "./Footer";
function CatCourses() {
  const location = useLocation();
  const name = location.state.name;
  const[category,setCategory]=useState([])
  const config = { headers: {'Authorization':`Bearer ${localStorage.getItem('authId')}`}, withCredentials: false }
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await  axios.get('/getCategoriesData',config);
        const categoryData = response.data.value.data.categories.find(category => category.name === name);
        setCategory(categoryData ? categoryData.courses : []);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [name]);
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
return (
    <>
    <div className="catCourses">
        <div ke={category._id}>
        <div className="popularCourse" id="popularCourse1">
            <div className="subHeadingHome" style={{fontSize:'2rem'}}>
            Top selling courses in{" "}
            <span className="cateName">{name}</span>
            </div>
            <div className="slid" id="slid1">
            {category&&category.map((course) => (
                <Card
                ke={course._id}
                imgSrc={course.courseImage}
            title={course.title}
                        creator={course.createdBy.name}
                rating={course.rating}
                cost={course.price}
                thumb={course.thumbnail}
              />
            ))}
            </div>
            <div className="phoneCat">
            <div className='slid'>
    <Slider className=''{...settings}>
     {category&&category.map(course=>(
      <Card
                      ke={course._id}
                      imgSrc={course.courseImage}
                      title={course.title}
                      creator={course.createdBy.name}
                      rating={course.rating}
                      cost={course.price}
                      thumb={course.thumbnail}
                    />     ))}
</Slider>
</div>
            </div>
        </div>
        </div>
    </div>
    <TeachFooter/>
    <Footer/>
    </>
);
}

export default CatCourses;
