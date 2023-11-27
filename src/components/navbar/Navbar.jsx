import React, { useEffect } from 'react';
import './navbar.css'
import searchIcon from '../../assets/search.svg'
import heart from '../../assets/heart.svg'
import cart from '../../assets/cart.svg'
import notification from '../../assets/notification.svg'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';
import arrowpic from '../../assets/arrow.svg'
import { useState } from 'react';
import axios from '../../api/axios';
function Navbar() {
  const navigate=useNavigate();

  let menuCloseTimeout;
    const location = useLocation();
    const [categories,setCategories]=useState([]);
    const {loginStatus,user}=useAuth()
    console.log(user);
    const eduStatus = (location.pathname === '/educator/home'||location.pathname === '/educator/uploadcourses'||location.pathname === '/educator/profile');
  const isSignup = (location.pathname === '/signup');
  const [isOpen, setIsOpen] = useState(false);
    const openMenu = () => {setIsOpen(true);
      clearTimeout(menuCloseTimeout);
    }
    const closeMenu = () => {
      menuCloseTimeout = setTimeout(() => {
        setIsOpen(false);
      }, 300);
    };
    const config = { headers: {'Authorization':`Bearer ${localStorage.getItem("authId")}`}, withCredentials: false }
    useEffect(()=>{
    const getCat = async () => {
      try {
        console.log("loadingCat")
        const response = await  axios.get('/getCategoriesName',config);
        setCategories(response.data.value.data.categories);
        console.log(response.data.value.data.categories);
      } catch (error) {
        console.log("catNameError",error);
      }
    };
    getCat();},[])
    const[search,setSearch]=useState();
    const[isOpen1,setOpen1]=useState(false);
    const searchIt = async (e) => {
      try {
        const response = await  axios.get(`/search-course/?coursetitle=${e.target.value}&page=1&pagesize=5`,config);
      setSearch(response.data.data.courses);
      setOpen1(true);

      } catch (error) {
        console.log("catNameError",error);
      setOpen1(false);

      }
    };
  const navigateTo=(ke)=>{
  const data= {id:ke};
  navigate('/coursePage',{state:data});
setOpen1(false)}
const navigateTo1=(name)=>{
  const data= {name:name};
  navigate('/categoryCourses',{state:data});
  } 
   return (
   <div style={eduStatus?{background:'#0E0035'}:{}} className="navbar-box">
            <div style={!loginStatus?{marginRight:'2rem'}:{}} className={eduStatus?"eduInnerbox":"innerbox"}>
                <NavLink style={{textDecoration:'none',color:'black'}} to={loginStatus?'/home':'/login'}>
                <div className="logo-container">
                    <div className="logo">
                        <span style={eduStatus?{color:'#00FF84'}:{ color:'#5928E5'}}>i</span>
                        <span style={eduStatus?{color:'#FFF'}:{}}>Learn</span>
                    </div>
                </div>
                </NavLink>
                {!eduStatus?
                <>
                <div className="categories" onMouseEnter={openMenu}
      onMouseLeave={closeMenu}>
                <NavLink style={{color:'black', textDecoration:'none'}}to='courses'><div>Categories</div></NavLink>
                    <div className="arrow">
                      <img src={arrowpic}/>
                    </div>
    {isOpen && (
        <div className="catMenuItems1" onMouseEnter={openMenu}
        onMouseLeave={closeMenu}>
          {categories.map((item, index) => (
            <div key={index} className={`catMenuItem1`} onClick={()=>navigateTo1(item)}>
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
                <div className="search-bar">
                    <img className={"search-icon"} src={searchIcon}/>
                    <input type='textarea'
                    placeholder='What do you want to Learn'
                    onChange={searchIt}/>
                    {isOpen1 && (
        <div className="catMenuItems2">
          {search.map((item, index) => (
            <div key={index} className={`catMenuItem2`} onClick={()=>navigateTo(item._id)}>
              {item.title}
            </div>
          ))}
        </div>
      )}
                </div>
                <div className="popular-courses"><NavLink style={{color:'black', textDecoration:'none'}}to='courses'>Popular courses</NavLink></div>
                <NavLink to={'educator/home'} style={{color:'black', textDecoration:'none'}}><div className="teach">Teach on ilearn</div></NavLink>
{!loginStatus?
                <div className="sign-up" >{isSignup ? (
            <NavLink className={"navLink"} to="/login">Log in</NavLink>
          ) : (
            <NavLink className={"navLink"} to="/signup">Sign up</NavLink>
          )}
</div>:<div className='navIcons'>
<NavLink style={{height:'18px'}} to={'/wallet'}><img src={notification}/></NavLink>
    <NavLink style={{height:'18px'}} to={'/cartPage'}><img src={cart} alt="" /></NavLink>
    <NavLink style={{height:'18px'}} to={'/learning/3'}><img src={heart} /></NavLink>
    <NavLink to={'/profilePage'} style={{textDecoration:'none'}}>
    {user&&user.profileimg?<img style={{height:'1.8rem',width:'1.8rem',borderRadius:'100%'}} src={`https://ilearn.varankit.tech/${user.profileimg}`} />:<div className='pfpNav'>
    {user&&user.name.charAt(0).toUpperCase()}
    </div>}
    </NavLink>
      </div>}
            </>:<div className='secEdu'>
            <NavLink to={'/educator/uploadcourses'}  style={{textDecoration:'none'}}><div className='uploadCourses'>Upload courses</div></NavLink>
            <NavLink to={'/educator/profile'}  style={{textDecoration:'none'}}>
            {user&&user.profileimg?<img style={{height:'1.8rem',width:'1.8rem',borderRadius:'100%',border:'2px solid #00FF84'}} src={`https://ilearn.varankit.tech/${user.profileimg}`} />:<div style={{border:'2px solid #00FF84'}} className='pfpNav'>
    {user&&user.name.charAt(0).toUpperCase()}
    </div>}</NavLink>
                </div>}
        </div>
        </div>
  )
}

export default Navbar