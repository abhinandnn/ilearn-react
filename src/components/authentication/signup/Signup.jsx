import React from 'react'
import Signup_form from './Signup_form'
import './signup.css'
import signImg from '../../../assets/sign.svg'
import Progress from '../../../assets/progressbar.svg'
function Signup() {
  return (
    <div className='top'>
    <div className='sidestrip'>
    <div className='logoMobile'><span>i</span>Learn</div>
    <img className='sign' src={signImg}/>
    </div>
    <div className='signup_section'>
        <img className="progressBar"src={Progress}/>
      <div className='signup-statement'>
      Sign up to <span>i</span>Learn
      <div className='signup-statement1'>
        Sign up and start learning in a 3 step process
      </div>
      <Signup_form/>
      </div>
    </div>
    </div>
  )
}

export default Signup