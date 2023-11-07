import React from 'react'
import Card from './Card'
import CourseDisplay from './CourseDisplay';
import { useState,useEffect } from 'react';
import axios from '../../api/axios';
const C_URL='https://udemy-nx1v.onrender.com/getCategoriesData'
function CourseVariety() {                                                                                               
    const categories = [
        "Development",
        "Business",
        "Finance & Accounting",
        "IT & Software",
        "Office Productivity",
        "Personal Development",
        "Design",
        "Marketing",
        "Lifestyle",
        "Photography",
        "Health & Fitness",
        "Music",
        "Teaching & Academics"
      ];
      const token=localStorage.getItem("authId");
  const config = { headers: {'Authorization':`Bearer ${token}`}, withCredentials: false }
  const [categories1, setCategories] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        console.log("loading")
        const response = await  axios.get(C_URL,config);
        const categoryData = response.data.data.categories
        setCategories(categoryData);
        console.log(response.data.data.categories);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
      
      
  return (
    <div className='courseVar'>
        <div className='courseHead'>
        <span className='subHeadingHome'>Variety of courses to build up your skills</span>
         <p>Choose from over 210,000 online video courses</p>
        </div>
        <div className='catChips'>
            {categories.map(cat=>(<button className='catChip'>{cat}</button>))}
        </div>
        <div>
        <CourseDisplay categories={categories1}/>
        </div>
    </div>
  )
}

export default CourseVariety