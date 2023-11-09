import React from 'react'
import mobile from '../../assets/mobile.svg'
import getApp from '../../assets/getApp.svg'
import './utils.css'
function AppPromote() {
  return (
    <div className='appPromote'>
        <img className='mobiS' src={mobile}/>
<div className='appBox'>
    <div style={{minWidth:'22rem'}}>Learn from anywhere</div>
    <i className='bord'/>
    <div className='appTex'>Take classes on the go with the iLearn app. Stream or download to watch on the plane, the subway, or wherever you learn best.
    <button className='getApp'><img src={getApp}/></button></div>

</div>
    </div>
  )
}

export default AppPromote