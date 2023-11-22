import {React,useState} from 'react'
import { useEffect } from 'react'
import './videoPage.css'
import VideoPlayer from '../utils/VideoPlayer'
import UpNext from '../utils/UpNext'
import FilesTutor from './FilesTutor'
import Footer from '../home/Footer'
import AppPromote from '../utils/AppPromote'
import Review from '../utils/Review'
import CircularProgress from '../utils/CircularProgress'
import GiveRating from '../utils/GiveRating'
import videoL from '../../assets/Video.mp4';
import axios from '../../api/axios'
import { useLocation } from 'react-router-dom'
function VideoPage() {
  const location = useLocation();
  const _id = location.state.id;
  const [isFiles,setFiles]=useState(true);
  const [lectureId,setLecture]=useState()
  const [vidPath,setPath]=useState()
  const [course, setCourse] = useState(
    {category: null,
      createdAt: null,
      createdBy: null,
      description: null,
      duration: null,
      isPublished: null,
      ownedBy: null,
      price: null,
      rating: null,
      ratings: null,
      reviews: null,
      title: null,
      totalStudents: null,
      updatedAt: null,
      videos: []
    }
  );
  const [creator, setCreator]=useState({})
  const[videoOk,setVideo]=useState([])
  const[review,setReview]=useState({});
  const config = { headers: {'Authorization':`Bearer ${localStorage.getItem('authId')}`}, withCredentials: false }
  useEffect(() => {
    console.log(`/getCourseById/${_id}`);
    const getData = async () => {
      try {
        console.log("loading")
        const response = await  axios.get(`/getCourseById/${_id}`,config);
        console.log(config);
        setCreator(response.data.data.course.createdBy);
        setCourse(response.data.data.course);
        setVideo(response.data.data.course.videos);
        console.log(response.data.data.course.videos)
        setLecture(response.data.data.course.videos[0].video._id);
        setPath(response.data.data.course.videos[0].video.videoUrl_720p);
console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    const getData1=async()=>{
      try {
        console.log("loading Review")
        const response = await  axios.get(`/get-reviews/${_id}`,config);
        setReview(response);
console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  getData();
getData1();
},[])
  const commun=()=>{
    setFiles(false);
  }
  const token=localStorage.getItem("authId");
  const headers = {
    'Authorization':`Bearer ${token}`,
            'Content-Type': 'video/mp4',
  };
  const filesNav=()=>setFiles(true)
  const videoLink = `https://udemy-nx1v.onrender.com/video/${_id}/lecture/${lectureId}?path=${vidPath}?${new URLSearchParams(headers).toString()}`
  console.log('link',videoLink)
  const changeVideo = (videoId, videoUrl) => {
    setLecture(videoId);
    setPath(videoUrl);
  };
return (
    <div>
    <div className='videoPage'>
    <div className='videoPageStatement'>
     {course.title}
    </div>
    <div className='videoPlayerSec'>
    <div className='videoPlay'>
    <VideoPlayer videoUrl={videoLink}/>
    <div className='underVideo'>
      <div className='videoNav'>
    <div className={`FileTut ${isFiles?'selectedNav':''}`} onClick={filesNav}><svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2368_36998)">
<path d="M4.0719 8.46082H4.63577C4.61721 8.27985 4.60213 8.09306 4.59053 7.90045C4.57892 7.70784 4.58472 7.52104 4.60793 7.34005H4.14848C3.57765 7.34005 3.07178 7.2159 2.6309 6.96761C2.19001 6.71932 1.84426 6.37473 1.59366 5.93385C1.34304 5.49296 1.21774 4.98478 1.21774 4.40931C1.21774 3.83847 1.34304 3.33261 1.59366 2.89172C1.84426 2.45084 2.19001 2.10625 2.6309 1.85796C3.07178 1.60967 3.57765 1.48553 4.14848 1.48553H10.3232C10.8894 1.48553 11.393 1.60967 11.8338 1.85796C12.2747 2.10625 12.6216 2.45084 12.8746 2.89172C13.1275 3.33261 13.254 3.83847 13.254 4.40931C13.254 4.98478 13.1286 5.49296 12.878 5.93385C12.6274 6.37473 12.2805 6.71932 11.8373 6.96761C11.3941 7.2159 10.8894 7.34005 10.3232 7.34005H7.87976C7.85191 7.40964 7.83451 7.49201 7.82758 7.58715C7.82059 7.68229 7.82406 7.78207 7.83798 7.88648C7.85191 7.99093 7.87512 8.09304 7.90763 8.19279C7.94009 8.29258 7.98186 8.38193 8.03295 8.46082H10.3998C11.1887 8.46082 11.8872 8.28912 12.4951 7.94571C13.1031 7.60227 13.58 7.12656 13.9257 6.5186C14.2715 5.91064 14.4443 5.20754 14.4443 4.40931C14.4443 3.61571 14.2715 2.91377 13.9257 2.30349C13.58 1.69321 13.1031 1.21752 12.4951 0.876407C11.8872 0.5353 11.1887 0.364746 10.3998 0.364746H4.0719C3.28295 0.364746 2.58449 0.5353 1.97653 0.876407C1.36857 1.21752 0.891715 1.69321 0.545966 2.30349C0.200218 2.91377 0.0273438 3.61571 0.0273438 4.40931C0.0273438 5.20754 0.200218 5.91064 0.545966 6.5186C0.891715 7.12656 1.36857 7.60227 1.97653 7.94571C2.58449 8.28912 3.28295 8.46082 4.0719 8.46082ZM9.65495 11.6978H15.9828C16.7718 11.6978 17.4703 11.5261 18.0782 11.1827C18.6862 10.8393 19.163 10.3636 19.5087 9.75563C19.8545 9.14767 20.0273 8.44456 20.0273 7.64632C20.0273 6.85274 19.8545 6.15081 19.5087 5.54053C19.163 4.93025 18.6862 4.45455 18.0782 4.11345C17.4703 3.77234 16.7718 3.60179 15.9828 3.60179H15.412C15.4352 3.77814 15.4526 3.96378 15.4642 4.1587C15.4758 4.35361 15.47 4.54157 15.4468 4.72257H15.8993C16.4701 4.72257 16.976 4.84671 17.4168 5.095C17.8578 5.34329 18.2047 5.68788 18.4576 6.12877C18.7105 6.56965 18.837 7.0755 18.837 7.64632C18.837 8.22182 18.7105 8.73001 18.4576 9.17088C18.2047 9.61175 17.8578 9.95634 17.4168 10.2046C16.976 10.453 16.4701 10.5771 15.8993 10.5771H9.73151C9.16067 10.5771 8.65481 10.453 8.21394 10.2046C7.77302 9.95634 7.42727 9.61175 7.17668 9.17088C6.92606 8.73001 6.80076 8.22182 6.80076 7.64632C6.80076 7.0755 6.92606 6.56965 7.17668 6.12877C7.42727 5.68788 7.77302 5.34329 8.21394 5.095C8.65481 4.84671 9.16067 4.72257 9.73151 4.72257H12.1749C12.2074 4.62975 12.2249 4.51605 12.2272 4.38146C12.2295 4.24687 12.2132 4.10996 12.1784 3.97074C12.1436 3.83151 12.0891 3.70853 12.0148 3.60179H9.65495C8.86598 3.60179 8.16751 3.77234 7.55955 4.11345C6.95159 4.45455 6.47474 4.93025 6.12899 5.54053C5.78324 6.15081 5.61036 6.85274 5.61036 7.64632C5.61036 8.44456 5.78324 9.14767 6.12899 9.75563C6.47474 10.3636 6.95159 10.8393 7.55955 11.1827C8.16751 11.5261 8.86598 11.6978 9.65495 11.6978Z" fill="black" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2368_36998">
<rect width="20" height="11.3958" fill="white" transform="translate(0.0273438 0.302246)"/>
</clipPath>
</defs>
</svg>
Files by Tutor</div>
      <div className={`community ${!isFiles?'selectedNav':''}`} onClick={commun}><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.0227 18.0001C6.22415 18.0001 6.40927 17.9455 6.57805 17.8363C6.74684 17.727 6.95373 17.5632 7.19874 17.3446L10.0163 14.8294H15.2596C16.0708 14.8294 16.7541 14.6833 17.3095 14.3911C17.8648 14.0989 18.2854 13.6742 18.5712 13.1171C18.8571 12.56 19 11.88 19 11.077V4.80122C19 3.9983 18.8571 3.31829 18.5712 2.76117C18.2854 2.20404 17.8648 1.77937 17.3095 1.48715C16.7541 1.19494 16.0708 1.04883 15.2596 1.04883H4.74048C3.92923 1.04883 3.24592 1.19494 2.69056 1.48715C2.13521 1.77937 1.71461 2.20404 1.42877 2.76117C1.14292 3.31829 1 3.9983 1 4.80122V11.077C1 11.88 1.14292 12.56 1.42877 13.1171C1.71461 13.6742 2.13521 14.0989 2.69056 14.3911C3.24592 14.6833 3.92923 14.8294 4.74048 14.8294H5.1325V16.9596C5.1325 17.2764 5.21008 17.529 5.36526 17.7175C5.52043 17.9059 5.73957 18.0001 6.0227 18.0001ZM6.35754 16.5008V14.1248C6.35754 13.9009 6.31126 13.7425 6.2187 13.6496C6.12614 13.5568 5.96825 13.5103 5.74502 13.5103H4.74048C3.91289 13.5103 3.30173 13.3042 2.90699 12.8918C2.51225 12.4794 2.31489 11.8718 2.31489 11.0689V4.80122C2.31489 4.00377 2.51225 3.39885 2.90699 2.98647C3.30173 2.57409 3.91289 2.3679 4.74048 2.3679H15.2596C16.0817 2.3679 16.6915 2.57409 17.089 2.98647C17.4864 3.39885 17.6852 4.00377 17.6852 4.80122V11.0689C17.6852 11.8718 17.4864 12.4794 17.089 12.8918C16.6915 13.3042 16.0817 13.5103 15.2596 13.5103H9.96738C9.73868 13.5103 9.55356 13.5349 9.412 13.5841C9.27044 13.6333 9.12343 13.737 8.97098 13.8954L6.35754 16.5008Z" fill="black" stroke="white" stroke-width="0.2"/>
</svg>
        Community</div>
        </div>
   {isFiles? <FilesTutor filesNum={4} files={
      [
        {
          title:'helloworld',
          size:'20'
        },
        {
          title:'helloworld',
          size:'20'
        },
        {
          title:'helloworld',
          size:'20'
        }
      ]
    }/>:<></>}
    </div></div>
    <div className='upNextSec'>
    <UpNext videos={videoOk} thumb={`https://udemy-nx1v.onrender.com/${course.thumbnail}`} changeVideo={changeVideo}/>
    <CircularProgress totalLect={14} completedLect={8}/>
    <GiveRating reviewNo={1200} avgRating={4.8}/>
    </div>
    </div>
    <Review isVideoPage={true} avgRating={4.8} name={'Abhi'} rating1={4} date={'21 Nov 2023'} text={`I really liked the course, everything is clear and understandable. A lot of useful information that you can't find on the Internet. On the course you will learn what 3D motion design is, how to work with 3D programs, learn how to create animated models, as well as create and animate videos.`}/>
    </div>
    <AppPromote/>
    <Footer/>
    </div>
  )
  
  }
export default VideoPage