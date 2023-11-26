import React from 'react'
import { useNavigate } from 'react-router-dom'
function TeachFooter() {
  const navigate=useNavigate()
  return (
    <div className='teachFooter'>
        <div>
        Turn what you know in an opportunity and reach millions
        </div>
    <button className='footButton' onClick={()=>navigate('/educator/home')}>Teach at iLearn</button>
    </div>
  )
}

export default TeachFooter