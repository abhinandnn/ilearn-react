import React from 'react'
import Card from './Card'
import CourseDisplay from './CourseDisplay';
import { useState,useEffect } from 'react';
import axios from '../../api/axios';
function CourseVariety() {                                                                                               
    const [categories,setCategories]=useState([]);
      const token=localStorage.getItem("authId");
  const config = { headers: {'Authorization':`Bearer ${token}`}, withCredentials: false }
  const [categories1, setCategories1] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        console.log("loading")
        const response = await  axios.get('/getCategoriesData',config);
        const categoryData = response.data.value.data.categories
        setCategories1(categoryData);
        console.log(response.data.value.data.categories);
      } catch (error) {
        console.log(error);
      }
    };
    const getCat = async () => {
      try {
        console.log("loadingCat")
        const response = await  axios.get('/getCategoriesName',config);
        setCategories(response.data.value.data.categories);
        console.log(response.data.value.data.categories);
      } catch (error) {
        console.log("catNameError",error);
      }
    };
    getCat();
    getData();
  }, []);
      
  return (
    <div className='courseVar'>
      <div className='logoMobile' id='logoMob'><span style={{color:"#5928E5"}}>i</span>Learn</div>

        <div className='courseHead'>
        <span className='subHeadingHome' id='subHead2'>Variety of courses to build up your skills</span>
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