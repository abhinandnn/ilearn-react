import React, { useRef, useState, useEffect } from 'react';
import './utils.css';
import play from '../../assets/play pause 2.svg'
import pause from '../../assets/play pause.svg'
import forw10 from '../../assets/goforward.10.svg'
import back10 from '../../assets/gobackward.10.svg'
import speak from '../../assets/speake.svg'
import speaker from '../../assets/volume 100.svg'
import speaker1 from '../../assets/volume 25.svg'
import speaker2 from '../../assets/volume 50.svg'
import speedicon from '../../assets/speedometer.svg'
import full from '../../assets/full-screen-svgrepo-com 1.svg'
import subt from '../../assets/subtitle.svg'
const VideoPlayer = (props) => {
  const videoRef = useRef(null);
  const timelineRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [duration, setDuration] = useState();
  const [currentTime, setCurrentTime] = useState(0);
  const [progress,setProgress]=useState(0)
  const [isOpen, setIsOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [subtitleTrack, setSubtitleTrack] = useState(false);
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
      if(video.currentTime===video.duration)
       setIsPlaying(false);
    };
    const handleDurationUpdate = () => {
    setDuration(video.duration)
    }
    
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleDurationUpdate);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('keydown',handleKeyDown);
    };
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
  
    const toggleOpen = () => setIsOpen(!isOpen);
  
    const [playbackSpeed, setPlaybackSpeed] = useState(1);

  const handleSpeedChange = (speed) => {
    const video = videoRef.current;
    video.playbackRate = speed;
    setPlaybackSpeed(speed);
    toggleOpen();
  };
  const formatDuration = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
    return `${hours > 0 ? `${hours}:` : ''}${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
  };
    const menuItems = ['2', '1.75', '1.5', '1.25', '1', '0.75', '0.5', '0.25'];
    const toggleFullScreen = () => {
      const videoContainer = document.querySelector('.videoContainer');
      
      if (document.fullscreenElement) {
        document.exitFullscreen();
        setIsFullScreen(false);
      } else {
        videoContainer.requestFullscreen();
        setIsFullScreen(true);
      }}
      const handleKeyDown = (e) => {
        const video = videoRef.current;
    
        switch (e.key) {
          case 'ArrowRight':
            e.preventDefault();
            video.currentTime += 10;
            break;
          case 'ArrowLeft':
            e.preventDefault();
            video.currentTime -= 10;
            break;
          case ' ':
            e.preventDefault();
            togglePlayPause();
            break;
            case 'Escape':
              e.preventDefault();
              if (document.fullscreenElement) {
                document.exitFullscreen();
                setIsFullScreen(false);
              }
          default:
            break;
        }
      };
      const handleSubtitleChange = () => {
        setSubtitleTrack(!subtitleTrack);
      };
  return (
    <div className={`videoContainer ${isPlaying? '' : 'paused'} ${!isOpen?'':'paused'}`}>
      <img className="thumbnail"/>
      
      <div className={`videoCont ${isFullScreen ? 'fullscreen' : ''}`}>
      <div className='contContainer'>
      <div className="durationContainer">
            <div>{formatDuration(currentTime)}</div>
            /
            <div>{formatDuration(duration)}</div>
          </div>
        <div className="timelimeContainer" ref={timelineRef} onMouseDown={handleTimelineMouseDown}>
          <div className="timeline">
          <div className="progress" style={{ width: `${progress}%` }}>
            </div>
          </div>
        </div>
        <div className="controls">
          <div className='leftControl'>
<button onClick={handlePrevClick}>
<img src={back10}/>
</button>
          <button onClick={togglePlayPause}>
            {isPlaying ? (
              <img src={pause} />
            ) : (
             <img src={play}/>
            )}
          </button>
          <button onClick={handleSkipClick}>
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
          <div className='leftControl'>
      <button onClick={toggleOpen}>
        <img src={speedicon}/></button>
      {isOpen && (
        <div className="menuItems">
          {menuItems.map((item, index) => (
            <div key={index} className={`menuItem ${item == playbackSpeed ? 'selected' : ''}`} onClick={() => handleSpeedChange(item)}>
              {item}x
            </div>
          ))}
        </div>
      )}
    <button onClick={handleSubtitleChange}><img className={`subt ${subtitleTrack ? 'subt1' : ''}`} src={subt}/></button>

    <button onClick={toggleFullScreen}>{
      <img src={full}/>}</button>
    </div>
         </div>
        </div>
      </div>
      <video ref={videoRef}>
      <source src={props.videoUrl} 
        type="video/mp4"/>
      {subtitleTrack && (
          <track
          />
        )}
      </video>
    </div>
  );
};

export default VideoPlayer;
