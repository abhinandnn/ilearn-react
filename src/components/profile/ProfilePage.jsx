import React from "react";
import "./profilePage.css";
import ProfileCards from "./ProfileCards";
import TeachFooter from "../utils/TeachFooter";
import Footer from "../home/Footer";
import cam1 from "../../assets/camera1.svg";
import trash from "../../assets/trash.svg";
import { useState } from "react";
import axios from "../../api/axios";
import { useAuth } from "../utils/AuthContext";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
function ProfilePage() {
const validUsername = /^[a-z_.\d]{1,30}$/;
const validText = /^[a-zA-Z]+([\s][a-zA-Z]+)*$/;
const invalidUsername = /^(?=.*[A-Z])[A-Za-z_.\d]{1,}$/;
const [errorName, setErrorName] = useState("");
const [errorUserName, setErrorUsername] = useState("");
const [loading,setLoading] = useState("");
const [nameP,setNameP]=useState();
const [usernameP,setUserNameP]=useState();

const [profile,setProfile]=useState({
  profileimg:'',
  name:''
})
const [editProfile,setEdit]=useState(0)
const [id,setId]=useState()
const {user,logout}= useAuth();
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
    <div>
    <div className="profilePage">
        <div className="sideStripP">
        <div className="profileNav">
            <div className="profileNavItem" id="profileN">
            Profile
            </div>
            <Link to={'/learning/1'} style={{textDecoration:'none'}}><div className="profileNavItem">Your learnings</div></Link>
            <Link to={'/learning/3'} style={{textDecoration:'none'}}><div className="profileNavItem">Wishlist</div></Link>
            <Link to={'cartPage'} style={{textDecoration:'none'}}><div className="profileNavItem">Your cart</div></Link>
            <Link to={'/learning/1'} style={{textDecoration:'none'}}><div className="profileNavItem">Notification</div></Link>
            <Link to={'/learning/1'} style={{textDecoration:'none'}}><div className="profileNavItem">Help</div></Link>
            <div className="profileNavItem" onClick={logout}>Log out</div>
        </div>
        </div>
        <div className="profileSec">
        {!editProfile ? (
            <div className="profileSec1">
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
                    <span>@{profile&&profile.username}</span>
                    <span id="profileEmail">{user&&user.email}</span>
                  </div>
                  <button className="editButton" onClick={()=>setEdit(1)}>Edit profile</button>
                </div>
              </div>
              <div className="profileCert">
                <div className="profileCert">Your certificates</div>
                {/* <ProfileCards
                  title="This course by abhinandan pandey is very good"
                  createdBy="Abhinandan pandety"
                  date="8 Nov 2023"
                /> */}
              </div>
            </div>
          ) : (
            <div className="editProfile">
              <div className="editStatement">Edit profile</div>
              <div className="editProfile1">
              {profile&&(profile.profileimg?
                (<img
                  className="circleImg"
                  src={`https://ilearn.varankit.tech/${profile.profileimg}`}
                />):(<div className='circleImg' style={{background:'black',color:'white'}}>
                  {profile.name.charAt(0).toUpperCase()}
                  </div>))}
                <div className="profileIntroText" id="editProfileText">
                <div>
                    <img src={cam1} />
                    Change profile picture
                </div>
                <div style={{ color: "red" }}>
                    <img
                    className="trashProfile"
                    src={trash}
                    style={{ marginLeft: "0.15rem" }}
                    />
                    Remove profile picture
                </div>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
            <div className="form" id="formProfile">
                <div className="input-signup-name" id="inputProfileName">
                <input
                    type="text"
                    name="name"
                    maxLength={50}
                    placeholder="Enter Name"
                    value={nameP}
                    onChange={handleChange}
                    style={{
                    border: errorName ? "2px solid red" : "2px solid black",
                    }}
                    required
                />
                <label className={errorName ? "error-label" : ""}>Name</label>
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
                    }}
                    required
                />
                <label className={errorUserName ? "error-label" : ""}>
                    Username
                </label>
                <span className="error-message">{errorUserName}</span>
                </div>
            <button className='logButton' id="profileButton" disabled={loading}>
        {loading? (<svg className='sv' width="40"viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<circle cx="50" cy="50" r="45"/>
</svg>)
  :("Save Changes")}</button>
  </div>
            </form>
            </div>
            
        )}
        </div>
    </div>
    <TeachFooter />
    <Footer />
    </div>
);
}

export default ProfilePage;
