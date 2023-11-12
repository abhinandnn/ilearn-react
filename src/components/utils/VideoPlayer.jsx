import React, { useRef, useState, useEffect } from 'react';
import './utils.css';
import video from '../../assets/Video.mp4';
import play from '../../assets/play pause 2.svg'
import pause from '../../assets/play pause.svg'
import forw10 from '../../assets/goforward.10.svg'
import back10 from '../../assets/gobackward.10.svg'
import speak from '../../assets/speake.svg'
import speaker from '../../assets/volume 100.svg'
import speaker1 from '../../assets/volume 25.svg'
import speaker2 from '../../assets/volume 50.svg'


const VideoPlayer = () => {
  const videoRef = useRef(null);
  const timelineRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress,setProgress]=useState(0)


  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
    setIsPlaying(!video.paused)
  };

  const toggleMute = () => {
    const video = videoRef.current;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleVolumeChange = (e) => {
    const video = videoRef.current;
    video.volume = e.target.value;
    setVolume(video.volume);
    if(video.muted)
    setVolume(0);
    else if(!video.muted)
    setVolume(video.volume)
    if (video.volume === 0) {
      video.muted = true;
      setIsMuted(true);
    } else {
      video.muted = false;
      setIsMuted(false);
    }
  };
  useEffect(() => {
    const video = videoRef.current;
    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
      const progressPercent = (video.currentTime / video.duration) * 100;
      setProgress(progressPercent);
    };
  
    video.addEventListener('timeupdate', handleTimeUpdate);
  }, []);
  const handleSkipClick = () => {
    const video = videoRef.current;
    video.currentTime += 10;
  };
  const handlePrevClick = () => {
    const video = videoRef.current;
    if(video.currentTime>10)
    video.currentTime -= 10;
    else
    video.currentTime=0;
  };

  const handleTimelineMouseDown = (e) => {
    const timeline = timelineRef.current;
    const rect = timeline.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const newTime = percent * videoRef.current.duration;
    videoRef.current.currentTime = newTime;
  };
  

  return (
    <div className={`videoContainer ${isPlaying ? '' : 'paused'}`}>
      <img className="thumbnail-img" alt="Video Thumbnail" />
      
      <div className="videoCont">
      <div className='contContainer'>
      <div className="durationContainer">
            <div className="current-time">{formatDuration(currentTime)}</div>
            /
            <div className="total-time">{formatDuration(duration)}</div>
          </div>
        <div className="timelimeContainer" ref={timelineRef} onMouseDown={handleTimelineMouseDown}>
          <div className="timeline">
          <div className="progress" style={{ width: `${progress}%` }}>
            <div className="thumb-indicator"></div>
            </div>
          </div>
        </div>
        <div className="controls">
<button className='play-pause-btn' onClick={handlePrevClick}>
<img src={back10}/>
</button>
          <button className="play-pause-btn" onClick={togglePlayPause}>
            {isPlaying ? (
              <img src={pause} />
            ) : (
             <img src={play}/>
            )}
          </button>
          <button className='play-pause-btn' onClick={handleSkipClick}>
<img src={forw10}/>
</button>
          <div className="volumeContainer">
            <button className="volumeButton" onClick={toggleMute}>
              {isMuted ? (
                <img src={speak} />
                ) : volume > 0.5 ? (
                   <img src={speaker}/>
                  ) : volume > 0.25?(
                    <img src={speaker2}/>
                  ):(<img src={speaker1}/>)}
            </button>
            <input
              className="volumeSlider"
              type="range"
              min="0"
              max="1"
              step="any"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
            />
          </div>
         </div>
        </div>
      </div>
      <video ref={videoRef} src={video}>
      </video>
    </div>
  );
};

const formatDuration = (time) => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = Math.floor(time % 60);
  return `${hours > 0 ? `${hours}:` : ''}${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

export default VideoPlayer;
