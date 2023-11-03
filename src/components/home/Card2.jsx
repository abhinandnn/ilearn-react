import React from 'react'
import pfp from '../../assets/userPfp.svg'
import playB from '../../assets/buttonCard2.svg'
import dCourts from '../../assets/dCourts.svg'
function Card2({text,userName,courseTitle,creator}) {
  return (
    <div className='Card2'>
    <div className='cardCont2'>
        <img id='dc' src={dCourts}/>
    <div className='textCard2'>
        {text}
    </div>
    <div className='userNameCard2'>
       <img src={pfp}/> {userName}
    </div>
    <div className='lowCard2'>
        <img src={playB}/>
    <div className='titleCard2'>{courseTitle}
        <p className='creatorNameCard2'>
            {creator}
            </p></div>
            </div>
</div>
</div>
  )
}

export default Card2