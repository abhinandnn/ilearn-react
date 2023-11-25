import React from 'react'
import './educator.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuth } from '../utils/AuthContext';
import axios from '../../api/axios';
import { toast } from 'react-toastify';
import cam1 from "../../assets/camera1.svg";
import trash from "../../assets/trash.svg";
import TeachFooter from '../utils/TeachFooter';
import Footer from '../home/Footer';
import { useNavigate } from 'react-router-dom';
function EduProfile() {
  const navigate=useNavigate()
  const validUsername = /^[a-z_.\d]{1,30}$/;
  const validText = /^[a-zA-Z]+([\s][a-zA-Z]+)*$/;
  const invalidUsername = /^(?=.*[A-Z])[A-Za-z_.\d]{1,}$/;
  const [errorName, setErrorName] = useState("");
  const [errorUserName, setErrorUsername] = useState("");
  const [loading,setLoading] = useState("");
  const [nameP,setNameP]=useState();
  const [usernameP,setUserNameP]=useState();
  const [domainP,setDomainP]=useState();
  const [bioP,setBioP]=useState();
  const [profile,setProfile]=useState({
    profileimg:'',
    name:''
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
    setUserNameP(profile.username)
  setDomainP(profile.domain)
setBioP(profile.bio)}
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
      else if (name === "domain") {
        setDomainP(e.target.value);
        }
        else if (name === "bio") {
          setBioP(e.target.value);
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
          name: nameP,
          domain:domainP,
          bio:bioP
        },config);
        toast.info('Profile updated');
        console.log(response.data);
        setEdit(0);
      } catch (error) {
        toast.error('');
        console.error('Error updating profile:', error);
      }
    
    }}
const [changePfp,setPfp]=useState(false)
    const [file, setFile] = useState('');
const [fileUrl,setFileUrl]=useState('')
  const handleFileChange = async(event) => {
    const selectedFile = event.target.files[0];
    console.log('some',selectedFile)
    setFile(selectedFile);
    setFileUrl(URL.createObjectURL(selectedFile));
    setPfp(true)
    try {
      const formData = new FormData();
      formData.append('image', selectedFile);
      const response = await axios.patch('/update-profileImg', formData,config);
      console.log(response.data);
      toast.success(response.data.message)
    } catch (error) {
      console.error('Error creating course:', error.response);
    }
  };
  return (
    <>
    <div className='profilePageEdu'>
    {!editProfile?(
      <>
        <div className='profilePageEduText'>
          Teacher's Profile
        </div>
        <div className="profileIntro">
        {profile&&(profile.profileimg?
                (<img
                  className="circleImg"
                  src={`https://ilearn.varankit.tech/${profile.profileimg}`}
                />):(<div className='circleImg' style={{background:'black',color:'white'}}>
                  {profile.name.charAt(0).toUpperCase()}
                  </div>))}
                <div className="profileIntroDet">
                  <div className="profileIntroText">
                    {profile&&profile.name}
                    {profile&&profile.domain&&<span>{profile.domain}</span>}
                    {profile&&profile.bio&&<span id="profileEmail">{profile.bio}</span>}
                  </div>
                </div>
<div className='educatorAbout'>
<div className='educatorAbout1'>
  <span className='educatorAboutNo'>{user&&user.createdCourse.length}</span>
  <span className='educatorAboutText'>Published courses</span>
</div>
<div className='educatorAbout1'>
<span className='educatorAboutNo'>0</span>
  <span className='educatorAboutText'>Active Learners</span>
</div>
</div>
              </div>
              <div className='eduButFlex'>
              <button className="uploadCourseButton" onClick={()=>setEdit(1)}>Edit profile</button>
              <button className="uploadCourseButton" style={{background:'#5928E5',border:'2px solid #5928E5',color:'white',fontWeight:'500'}} onClick={()=>navigate('/profilePage')}>Switch to student's view</button>
              </div>
              <div className='profilePageEduText'>
            Your Courses
        </div></>):<>
        <div>
        <div className='eduProfileUpper'>
          <div className='profileImgEdit'>
          {profile&&((profile.profileimg||file)?
                (<img
                  className="circleImg"
                  src={(profile.profileimg&&!changePfp)?`https://ilearn.varankit.tech/${profile.profileimg}`:fileUrl}
                />):(<div className='circleImg' style={{background:'black',color:'white'}}>
                  {profile.name.charAt(0).toUpperCase()}
                  </div>))}
                  <div className="profileIntroText" id="editProfileText">
                  <label for="fileInput">
                <div className="upImg1">
                    <img src={cam1} />
                    {profile&&(profile.profileimg||file||changePfp)?'Change':'Add a'} profile picture
                </div>
                </label>
                <input type="file" id="fileInput" name="fileInput" accept='.jpg,.jpeg,.png,.heic' onChange={handleFileChange}/>
                {profile&&(profile.profileimg||file)?
                <div className="upImg1" style={{ color: "red" }} onClick={''}>
                    <img
                    className="trashProfile"
                    src={trash}
                    style={{ marginLeft: "0.15rem" }}
                    />
                    Remove profile picture
                </div>
                :<></>}
                </div>
                  </div>
                  <form onSubmit={handleSubmit}>
            <div className="form" id="formProfile">
                <div className="input-signup-name" id="inputProfileName">
                <input
                    type="text"
                    name="name"
                    maxLength={30}
                    placeholder="Enter Name"
                    value={nameP}
                    onChange={handleChange}
                    style={{
                    border: errorName ? "2px solid red" : "2px solid black",
                    background:'#EAEAEA'

                    }}
                    required
                />
                <label style={{background:'#EAEAEA'}} className={errorName ? "error-label" : ""}>Name</label>
                <span className="error-message">{errorName}</span>
                </div>
                <div className="input-signup-name" id="inputProfileName">
                <input
                    type="text"
                    name="username"
                    maxLength={30}
                    placeholder="Enter Username"
                    onChange={handleChange}
                    value={usernameP}
                    style={{
                    border: errorUserName
                        ? "2px solid red"
                        : "2px solid black",
                        background:'#EAEAEA'
                    }}
                    required
                />
                <label style={{background:'#EAEAEA'}} className={errorUserName ? "error-label" : ""}>
                    Username
                </label>
                <span className="error-message">{errorUserName}</span>
                </div>
                <div className="input-signup-name" id="inputProfileName">
                <input
                    type="text"
                    name="domain"
                    maxLength={20}
                    placeholder="Add a Professionals Domain"
                    value={domainP}
                    onChange={handleChange}
                    style={{
                    border: errorName ? "2px solid red" : "2px solid black",
                    background:'#EAEAEA',
                    fontFamily:'SF Pro'
                    }}
                    required
                />
                <label style={{background:'#EAEAEA'}} className={errorName ? "error-label" : ""}>Domain</label>
                <span className="error-message">{errorName}</span>
                </div>
                <div className="input-signup-name" id="inputProfileName">
                <input
                    type="text"
                    name="bio"
                    maxLength={20}
                    placeholder="Add a bio"
                    value={bioP}
                    onChange={handleChange}
                    style={{
                    border: errorName ? "2px solid red" : "2px solid black",
                    background:'#EAEAEA'
                    }}
                    required
                />
                <label style={{background:'#EAEAEA'}} className={errorName ? "error-label" : ""}>Bio</label>
                <span className="error-message">{errorName}</span>
                </div>
            <button style={{background:'#00FF84',border:'2px solid #00FF84',fontFamily:'SF Pro'}} className='logButton' id="profileButton" disabled={loading}>
        {loading? (<svg className='sv' width="40"viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<circle cx="50" cy="50" r="45"/>
</svg>)
  :("Save Changes")}</button>
  </div>
            </form>
        </div>
        </div>
        </>}
    </div>
<Footer eduStatus={true} />
    </>
  )
}

export default EduProfile