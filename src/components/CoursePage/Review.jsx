import React from 'react'
import star1 from '../../assets/star1.svg'


function Review(props) {
  return (
    <div>
        <div className='starHeading'>4.7{<img src={star1} />}</div>
        <div><p>User reviews</p>
        <p>See all</p>
        </div>
    </div>
  )
}

export default Review