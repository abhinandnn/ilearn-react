import React, { useEffect } from 'react'
import './utils.css'
function UpNext(props) {
  return (

    <div className='upNext'>
        <p>Lectures</p>
        <div className='upNextList'>
        {props.videos.map((videoF, index) => (
            <div className='upNextVideo' key={index} onClick={() => props.changeVideo(videoF.video._id, videoF.video.videoUrl)}>
              <img className='upNextThumbnail' src={props.thumb} alt='Thumbnail' />
              <div className='videoDet'>
                {videoF.video.videoTitle}
                <span>{videoF.video.videoDuration}</span>
            </div>
        </div>))}
        </div>
    </div>
  )
}

export default UpNext