import React from 'react'
import Card from './Card'
import CourseDisplay from './CourseDisplay';
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
      const categories1 = [
        {
          id: 1,
          categoryName: "Development",
          courses: [
            {
              id: 101,
              courseTitle: "JavaScript Basics",
              courseImage: "javascript-basics.jpg",
              creator: "John Doe",
              rating: 4.5,
              cost: 1999
            },
            {
              id: 102,
              courseTitle: "React Fundamentals",
              courseImage: "react-fundamentals.jpg",
              creator: "Jane Smith",
              rating: 4.8,
              cost: 2499
            },
            {
                id: 103,
                courseTitle: "JavaScript Basics",
                courseImage: "javascript-basics.jpg",
                creator: "John Doe",
                rating: 4.5,
                cost: 1999
              },
              {
                id: 104,
                courseTitle: "React Fundamentals",
                courseImage: "react-fundamentals.jpg",
                creator: "Jane Smith",
                rating: 4.8,
                cost: 2499
              }
          ]
        },
        {
          id: 2,
          categoryName: "Design",
          courses: [
            {
              id: 201,
              courseTitle: "UI/UX Design Principles",
              courseImage: "ui-ux-design.jpg",
              creator: "Alice Johnson",
              rating: 4.7,
              cost: 999
            },
          ]
        },
      ];
      
      
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