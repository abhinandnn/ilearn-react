import React from 'react'
import star1 from '../../assets/star1.svg'
function Stars({stars}) {
    const star=[];
    for(let i=0;i<stars;i++)
    {
        star.push(<img src={star1}/>)
    }
  return (
    <div className='starOP'>{star}</div>
  )
}

export default Stars