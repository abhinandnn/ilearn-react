import React from 'react'
import Slider from 'react-slick';
import Card from './Card';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './home.css'
function PopularCourses({courseName,course}) {
        var settings = {
          dots: false,
          infinite: true,
          arrows:true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 0,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 0
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        }
        const pythonCourses = [
          {
            courseImage: "https://via.placeholder.com/150",
            courseTitle: "Python Fundamentals: A Beginner's Guide",
            creator: "John Smith",
            rating: 4.7,
            cost: 999,
          },
          {
            courseImage: "https://via.placeholder.com/150",
            courseTitle: "Advanced Python Programming: Beyond Basics",
            creator: "Emily Johnson",
            rating: 4.9,
            cost: 1299,
          },
          {
            courseImage: "https://via.placeholder.com/150",
            courseTitle: "Python Web Development: Flask and Django",
            creator: "Michael Davis",
            rating: 4.8,
            cost: 1499,
          },
          {
            courseImage: "https://via.placeholder.com/150",
            courseTitle: "Python for Data Analysis and Visualization",
            creator: "Alice Brown",
            rating: 4.6,
            cost: 1199,
          },
          {
            courseImage: "https://via.placeholder.com/150",
            courseTitle: "Machine Learning with Python: Hands-on Guide",
            creator: "David Wilson",
            rating: 4.5,
            cost: 1599,
          },
          {
            courseImage: "https://via.placeholder.com/150",
            courseTitle: "Python for Network Security and Ethical Hacking",
            creator: "Sophia Lee",
            rating: 4.7,
            cost: 1399,
          },
          {
            courseImage: "https://via.placeholder.com/150",
            courseTitle: "Game Development with Python and Pygame",
            creator: "Matthew Robinson",
            rating: 4.6,
            cost: 1099,
          },
          {
            courseImage: "https://via.placeholder.com/150",
            courseTitle: "Python Scripting for Automation and DevOps",
            creator: "Emma White",
            rating: 4.8,
            cost: 1199,
          },
          {
            courseImage: "https://via.placeholder.com/150/100",
            courseTitle: "Python and AI: Building Intelligent Systems",
            creator: "Oliver Harris",
            rating: 4.9,
            cost: 1699,
          },
          {
            courseImage: "https://via.placeholder.com/150/100",
            courseTitle: "Python for IoT (Internet of Things) Applications",
            creator: "Lily Turner",
            rating: 4.7,
            cost: 1299,
          }
        ];        
  return (
    <div className='popularCourse'>
    <div className='subHeadingHome'>Top selling {courseName} courses</div>
    <button className='popularButton'>Explore all</button>
    <div className='slid'>
    <Slider className=''{...settings}>
     {pythonCourses.map(course=>(
     <Card imgSrc={course.courseImage} title={course.courseTitle} creator={course.creator} rating={course.rating} cost={course.cost}/>))}
</Slider>
</div>
    </div>
  )
}

export default PopularCourses