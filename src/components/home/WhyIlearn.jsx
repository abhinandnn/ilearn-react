import React from 'react'
import Slider from 'react-slick';
import './home.css'
import Card2 from './Card2'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ans1 from '../../assets/ans1.svg'
import ans2 from '../../assets/ans2.svg'
import ans3 from '../../assets/ans3.svg'
import edu1 from '../../assets/educator.svg'
function WhyIlearn() {
    var settings = {
        dots: false,
        infinite: true,
        arrows:true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 750,
            settings: {
              slidesToShow: 1,
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
  return (
    <div className='whyIlearn'>
        <div className='yIlearn'>
        why ilearn?
        
        <div className='ansSec'>
            <span className='bigNum'>
                1
            </span>
            <div className='ansText'>
            <p>LEARN AT YOUR OWN PACE</p>
            <div className='writings'>
            Learn on your terms, but never alone. Enjoy lifetime access to your course with the 12 month access to the community
            </div>
            </div>
            <img className='ansImg'src={ans1}/>
        </div>
        <div className='ansSec' id='ansSec2'>
        <img className='ansImg'src={ans2}/>
            <span className='bigNum' id='big2'>
                2
            </span>
            <div className='ansText'>
            <p>Build your network</p>
            <div className='writings'>
            Join a growing community, get peer insights, and discover exciting business opportunities and collaborations.
            </div>
            </div>
        </div>
        <div className='ansSec'>
            <span className='bigNum'>
            3
            </span>
            <div className='ansText'>
            <p>Stay connected with your educator</p>
            <div className='writings'>
            Get a separate chat box to stay connected with your educator and ask doubts whenever you want
            </div>
            </div>
            <img className='ansImg'src={ans3}/>
        </div>
        </div>
        <div className='Reviw'>
        <div className='userSay'>
            What our users have to say about us?
            <div className='writings' id='userSaywritings'>
            iLearn have helped 100+ peoples to get their dream jobs
            </div>
        </div>
        <div id='reviewSlide'>
        <Slider className='slide' {...settings}>
        <Card2 text={"I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered."}userName={"Marl Watson"} courseTitle={"Python and AI: Building Intelligent Systems"} creator={"Karl Marx"}/>
        <Card2 text={"I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered."}userName={"Marl Watson"} courseTitle={"Python and AI: Building Intelligent Systems"} creator={"Karl Marx"}/>
        <Card2 text={"I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered."}userName={"Marl Watson"} courseTitle={"Python and AI: Building Intelligent Systems"} creator={"Karl Marx"}/>
        <Card2 text={"I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered."}userName={"Marl Watson"} courseTitle={"Python and AI: Building Intelligent Systems"} creator={"Karl Marx"}/>
        </Slider>
    </div>
    </div>
    <div className='ansSec' id='eduC'>
        <img className='ansImg'src={edu1}/>
            <div className='ansText' id='eduE'>
            <p>Become an educator</p>
            <div className='writings' id='eduW'>
            Turn what you know into an opportunity
            and reach millions around the world.
            </div>
            <button className='homeButton' id='eduButton'>
        Learn more
      </button>
            </div>
            </div>
        </div>
  )
}

export default WhyIlearn