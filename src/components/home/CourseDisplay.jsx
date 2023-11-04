import React from 'react';
import Card from './Card';

function CourseDisplay({ categories }) {
  return (
    <div>

        {categories.map(category => (
          <div key={category.id}>
                  <div className='popularCourse' id='popularCourse1'>
            <div className='subHeadingHome'>
              Top selling courses in <span className='cateName'>{category.categoryName}</span>
            </div>
            <div className='slid' id='slid1'>
              {category.courses.map(course => (
                <Card

                  key={course.id}
                  imgSrc={course.courseImage}
                  title={course.courseTitle}
                  creator={course.creator}
                  rating={course.rating}
                  cost={course.cost}
                />
              ))}
            </div>
            </div>
          </div>
        ))}
 
    </div>
  );
}

export default CourseDisplay;
