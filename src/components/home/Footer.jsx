import React from 'react'
import Linkin from '../../assets/linkedin.svg'
import insta from '../../assets/insta.svg'
import x from '../../assets/x.svg'
function Footer() {
  return (
    <div className='foot'>
    <div className='footer'>
        <div className='footerColumn'>
            <p>About</p>
<p>Follow the creator</p>
<p>Contact us</p>
</div>
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
    </div>
    <div className='footLogo'>
        iLearn
        <div className='footIcon'>
            <img src={x}/>
            <img src={insta}/>
            <img src={Linkin} />
        </div>
        </div>
    </div>
  )
}

export default Footer