import React from 'react'

function ProfileCards(props) {
  return (
    <div className='profileCard'>
        <div style={{fontSize:'1.12rem',fontWeight:'700',fontFamily:'Poppins'}}><span style={{color:'#5928E5'}}>i</span>Learn</div>
        <div className='profileCardDet'>
        <img className='profileCardImg' src='https://picsum.photos/200/300'/>
        <div className='profileCardText'>
            <p>{props.title}</p>
            <span>{props.createdBy}</span>
        </div>
        </div>
        <div style={{marginTop:'1rem'}}>Completed on : {props.date}</div>
    </div>
  )
}

export default ProfileCards