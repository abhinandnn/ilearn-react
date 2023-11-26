import React from 'react'
import people from '../../assets/people.svg'
import { useNavigate } from 'react-router-dom';
function EduCard(props) {
  const navigate=useNavigate();
  const data= {id:props._id};
  const navigateTo=()=>{
    navigate('/coursePage',{state:data});
    }
  return (
    <div className='eduCard'>
        <div className='eduCard1'>
            <img src={`https://ilearn.varankit.tech/${props.thumb}`}/>
            <span onClick={()=>navigateTo()} className='viewCore'>View course</span>
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
    </div>
  )
}

export default EduCard