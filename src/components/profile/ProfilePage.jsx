import React from "react";
import "./profilePage.css";
import ProfileCards from "./ProfileCards";
import TeachFooter from "../utils/TeachFooter";
import Footer from "../home/Footer";
import cam1 from "../../assets/camera1.svg";
import trash from "../../assets/trash.svg";
import { useState } from "react";
function ProfilePage() {
const validUsername = /^[a-z_.\d]{1,30}$/;
const validText = /^[a-zA-Z]+([\s][a-zA-Z]+)*$/;
const invalidUsername = /^(?=.*[A-Z])[A-Za-z_.\d]{1,}$/;
const [name, setName] = useState("");
const [username, setUsername] = useState("");
const [errorName, setErrorName] = useState("");
const [errorUserName, setErrorUsername] = useState("");
const [loading,setLoading] = useState("");
const handleChange = (e) => {
    const { name, value } = e.target;
    let errorMessage = "";
    if (name === "name") {
    if (!validText.test(value.trim()) && value !== "") {
        errorMessage = "Name should only contain letters";
    }
    setErrorName(errorMessage);
    } else if (name === "username") {
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
   
  console.log(username)
    let hasErrors = true;
    if(!(errorUserName||errorName))
    {hasErrors=false}

    if (!hasErrors) {
    console.log("Form submitted:");}}
  return (
    <div>
    <div className="profilePage">
        <div className="sideStripP">
        <div className="profileNav">
            <div className="profileNavItem" id="profileN">
            Profile
            </div>
            <div className="profileNavItem">Your learnings</div>
            <div className="profileNavItem">Wishlist</div>
            <div className="profileNavItem">Your cart</div>
            <div className="profileNavItem">Notification</div>
            <div className="profileNavItem">Help</div>
            <div className="profileNavItem">Log out</div>
        </div>
        </div>
        <div className="profileSec">
        {0 ? (
            <div className="profileSec1">
            {" "}
              <div className="profileIntro">
                <img
                  className="circleImg"
                  src="https://picsum.photos/200/300"
                />
                <div className="profileIntroDet">
                  <div className="profileIntroText">
                    Abhinandan Pandey
                    <span>@abhinandn</span>
                    <span id="profileEmail">hellyeah@gmail.com</span>
                  </div>
                  <button className="editButton">Edit profile</button>
                </div>
              </div>
              <div className="profileCert">
                <div className="profileCert">Your certificates</div>
                <ProfileCards
                  title="This course by abhinandan pandey is very good"
                  createdBy="Abhinandan pandety"
                  date="8 Nov 2023"
                />
              </div>
            </div>
          ) : (
            <div className="editProfile">
              <div className="editStatement">Edit profile</div>
              <div className="editProfile1">
                <img
                  className="circleImg"
                  src="https://picsum.photos/200/300"
                />
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
