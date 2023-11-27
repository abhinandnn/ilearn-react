import React from 'react'
import people from '../../assets/people.svg'
import { useNavigate } from 'react-router-dom';
import trash from '../../assets/trash.svg'
import axios from '../../api/axios';
function EduCard(props) {
  const config = { headers: {'Authorization':`Bearer ${localStorage.getItem('authId')}`}, withCredentials: false }
  const navigate=useNavigate();
  const data= {id:props._id};
  const navigateTo=()=>{
    navigate('/coursePage',{state:data});
    }
    const delCourse=async()=>{
    
        try {
          console.log("loading")
          const response = await axios.delete(`/delete-course/${props._id}`,config);
          console.log(response);
          props.reload();
        } catch (error) {
          console.log('err',error.response);
      };}
    
  return (
    <div className='eduCard'>
        <div className='eduCard1'>
            <img src={`https://ilearn.varankit.tech/${props.thumb}`}/>
            <span onClick={()=>navigateTo('/coursePage')} className='viewCore'>View course</span>
            <span className='prise'>₹{props.price}</span>
        </div>
        <div className='eduCardTitle'>
            {props.title}
        </div>
       <div className='activePeep'>
        <img src={people}/> {props.students}
</div>
<div className='updatedEd'>
Last Updated on : {props.updatedOn.slice(0,10)}
</div>
<img onClick={delCourse} className='CourseDel' src={trash}/>
    </div>
  )
}

export default EduCard