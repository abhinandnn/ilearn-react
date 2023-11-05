import React from "react";
import Card from "./Card";
import Slider from "react-slick";
function CourseDisplay({ categories }) {
    var settings = {
        dots: false,
        infinite: false,
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
            breakpoint: 750,
            settings: {
              slidesToShow: 2.5,
              slidesToScroll: 1,
              initialSlide: 0
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 0
            }
          },
          {
            breakpoint: 450,
            settings: {
              slidesToShow: 1.5,
              slidesToScroll: 1
            }

          },
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
            
          }
        ]
      }
return (
    <div>
    {categories.map((category) => (
        <div key={category.id}>
        <div className="popularCourse" id="popularCourse1">
            <div className="subHeadingHome" id="subHead2">
            Top selling courses in{" "}
            <span className="cateName">{category.categoryName}</span>
            </div>
            <div className="slid" id="slid1">
            {category.courses.map((course) => (
                <Card
                style={"cardC"}
                key={course.id}
                imgSrc={course.courseImage}
                title={course.courseTitle}
                creator={course.creator}
                rating={course.rating}
                cost={course.cost}
                />
            ))}
            </div>
            <div className="phoneCat">
            <div className='slid'>
    <Slider className=''{...settings}>
     {category.courses.map(course=>(
     <Card key={course.id} imgSrc={course.courseImage} title={course.courseTitle} creator={course.creator} rating={course.rating} cost={course.cost}/>
     ))}
</Slider>
</div>
            </div>
        </div>
        </div>
    ))}
    </div>
);
}

export default CourseDisplay;
