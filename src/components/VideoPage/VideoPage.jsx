import React from 'react'
import play from '../../assets/play pause.svg'
import './videoPage.css'
import VideoPlayer from '../utils/VideoPlayer'
function VideoPage(props) {
  return (
    <div className='videoPage'>
    <div className='videoPageStatement'>
      {props.heading}
    </div>
    <VideoPlayer/>
    </div>
  )
}

export default VideoPage