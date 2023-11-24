import React from 'react'
import './educator.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuth } from '../utils/AuthContext';
import axios from '../../api/axios';
import { toast } from 'react-toastify';
import TeachFooter from '../utils/TeachFooter';
function EduProfile() {
  const validUsername = /^[a-z_.\d]{1,30}$/;
  const validText = /^[a-zA-Z]+([\s][a-zA-Z]+)*$/;
  const invalidUsername = /^(?=.*[A-Z])[A-Za-z_.\d]{1,}$/;
  const [errorName, setErrorName] = useState("");
  const [errorUserName, setErrorUsername] = useState("");
  const [loading,setLoading] = useState("");
  const [nameP,setNameP]=useState();
  const [usernameP,setUserNameP]=useState();
  const [profile,setProfile]=useState({
    profileimg:''
  })
  const [editProfile,setEdit]=useState(0)
  const [id,setId]=useState()
  const {user,logout}= useAuth('');
  const config = { headers: {'Authorization':`Bearer ${localStorage.getItem('authId')}`}, withCredentials: false }
  useEffect(()=>
    {
      user&&setId(user._id);
        const getProfile = async () => {
          try {
            const response = await  axios.get(`/get-user/${user._id}`,config);
            setProfile(response.data.data.user)
            console.log('ok',response.data.data.user)
  
          } catch (error) {
            console.log('err_',error.response);
          
        };
      setNameP(profile.name);
    setUserNameP(profile.username)}
      getProfile();    
    },[user,editProfile])
   
  const handleChange = (e) => {
      const { name, value } = e.target;
      let errorMessage = "";
      if (name === "name") {
      
      setNameP(e.target.value);
      if (!validText.test(value.trim()) && value !== "") {
          errorMessage = "Name should only contain letters";
      }
      setErrorName(errorMessage);
      } else if (name === "username") {
    setUserNameP(e.target.value);
      if (!validUsername.test(value) && invalidUsername.test(value)) {
          errorMessage = "Capital letters not allowed";
      } else if (
          !validUsername.test(value) &&
          !invalidUsername.test(value) &&
          value === ""
      ) {
          errorMessage = "";
      } else if (!validUsername.test(value) && !invalidUsername.test(value)) {
          errorMessage = "Invalid Username";
      }
      setErrorUsername(errorMessage);
      }
    };
    const handleSubmit = async(e) => {
      e.preventDefault();
  
      let hasErrors = true;
      if(!(errorUserName||errorName))
      {hasErrors=false}
  
      if (!hasErrors) {
      console.log("Form submitted:");
    
      try {
        const response = await axios.patch('/update-profile', {
          username: usernameP,
          name: nameP
        },config);
        toast.info('Profile updated');
        console.log(response.data);
        setEdit(0);
      } catch (error) {
        toast.error('');
        console.error('Error updating profile:', error);
      }
    
    }}
  return (
    <div className='profilePageEdu'>
        <div className='profilePageEduText'>
          Teacher's Profile
        </div>
        <div className="profileIntro">
          {profile&&profile.profileimg?
                <img
                  className="circleImg"
                  src={`https://ilearn.varankit.tech/${profile.profileimg}`}
                />:<div className='circleImg' style={{background:'black',color:'white'}}>
                  {user&&user.name.charAt(0).toUpperCase()}
                  </div>}
                <div className="profileIntroDet">
                  <div className="profileIntroText">
                    {profile&&profile.name}
                    <span>@{profile&&profile.username}</span>
                    <span id="profileEmail">{user&&user.email}</span>
                  </div>
                </div>
<div className='educatorAbout'>
<div className='educatorAbout1'>
  <span className='educatorAboutNo'>99</span>
  <span className='educatorAboutText'>Published courses</span>
</div>
<div className='educatorAbout1'>
<span className='educatorAboutNo'>99</span>
  <span className='educatorAboutText'>Active Learners</span>
</div>
</div>
              </div>
              <div className='eduButFlex'>
              <button className="uploadCourseButton" onClick={()=>setEdit(1)}>Edit profile</button>
              <button className="uploadCourseButton" style={{background:'#5928E5',border:'2px solid #5928E5',color:'white'}} onClick={()=>setEdit(1)}>Switch to student's view</button>
              </div>
              <div className='profilePageEduText'>
            Your Courses
        </div>
<TeachFooter/>
    </div>
  )
}

export default EduProfile