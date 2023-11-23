import React from 'react'
import Linkin from '../../assets/linkedin.svg'
import insta from '../../assets/insta.svg'
import x from '../../assets/x.svg'
import { Link } from 'react-router-dom';
function Footer(props) {
  const eduStatus=props.eduStatus;
  return (
    <div className='foot' style={eduStatus?{backgroundColor:'#0E0035'}:{}}>
    <div className='footer'>
        <div className='footerColumn'>
            <p>About</p>
<p>Follow the creator</p>
<p>Contact us</p>
<p>Get the app</p>
</div>
{!eduStatus?<>
<div className='footerColumn'>
            <p>Categories</p>
<p>Popular courses</p>
<p>Teach on iLearn</p>
<p>Log in</p>
<p>Sign up</p>
</div>
<div className='footerColumn'>
            <p>Terms</p>
<p>Privacy Policy</p>
<p>Cookies settings</p>
<p>Sitemap</p>
<p>Accessibility statement</p>
</div>
</>:<></>}
    </div>
    <div className='footLogo'>
        <div><span style={eduStatus?{color:'#00FF84'}:{ color:'#FFF'}}>i</span>Learn</div>
        <div className='footIcon'>
            <img src={x}/>
            <img src={insta}/>
            <img src={Linkin} />
        </div>
        </div>
    </div>
  )
}
Footer.defaultProps={
  eduStatus:false
}
export default Footer