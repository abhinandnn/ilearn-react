import React from 'react'

function PopularCourses({courseName}) {
  return (
    <div className='popularCourse'>
    <div className='subHeadingHome'>Top selling {courseName} courses</div>
    <button className='popularButton'>Explore all</button>
    </div>
  )
}

export default PopularCourses