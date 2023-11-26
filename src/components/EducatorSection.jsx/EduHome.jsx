import React, { useEffect } from 'react'
import './educator.css'
import w1 from '../../assets/whyTeach1.svg'
import w2 from '../../assets/whyTeach2.svg'
import w3 from '../../assets/whyTeach3.svg'
import Footer from '../home/Footer'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../../api/axios'
import { toast } from 'react-toastify'
function EduHome() {
  const config = { headers: {'Authorization':`Bearer ${localStorage.getItem('authId')}`}, withCredentials: false }
  const beEdu=async()=>{
    try {
      const response = await axios.patch('/become-instructor/', {},config);
      console.log(response.data);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  }
  useEffect(()=>{
beEdu();
  },[])
  return (
    <div className='eduHome'>
<div className='eduTopBanner'>
    <div className='uploadCourseCard'>
        <span className='uploadCourseText'>
        Turn what you know in an opportunity and reach <span className='paintEffect'>millions.</span>
        </span>
  <Link to={'/educator/uploadcourses'}><button className='uploadCourseButton'>Upload a course</button></Link>

    </div>
</div>
<div className='whyTeach'>
  <h1>Countless motivations to begin teaching.</h1>
  <h4>When you help others along their creative journey, it’s rewarding in more ways than one.</h4>
  <div className='aboutTeach'>
    <div className='aboutTeach1'>
    <div className='w1Img'><img className='whyTeachImg' src={w1}/></div>
  <div className='aboutTeachText'>Reach a <span className='paintEffect'>Global</span> Audience.</div>
  <div className='aboutTeachText1'>By uploading courses online, you can reach a vast and diverse audience from around the world.</div>
  </div>
  <div className='aboutTeach1'>
  <div><img className='whyTeachImg' src={w2}/></div>
  <div className='aboutTeachText'>Teach <span className='paintEffect'>your way.</span></div>
  <div className='aboutTeachText1'>By uploading courses online, you can reach a vast and diverse audience from around the world.</div>
  </div>
  <div className='aboutTeach1'>
  <div><img className='whyTeachImg' src={w3}/></div>
  <div className='aboutTeachText'>Earn <span className='paintEffect'>Money.</span></div>
  <div className='aboutTeachText1'>By uploading courses online, you can reach a vast and diverse audience from around the world.</div>
  </div>
  </div>
  <h1>Record your first course and get started.</h1>
  <Link to={'/educator/uploadcourses'}><button className='uploadCourseButton'>Upload a course</button></Link>

</div>
<Footer eduStatus={true} />
    </div>
  )
}

export default EduHome