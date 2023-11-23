import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import React from 'react'

function CircularProgress(props) {
    const percentage=Math.floor((props.completedLect/props.totalLect)*100);
    console.log(props)
  return (
    <div className='progressCard'>
        <div className='progressCardStatement'>Your Progress</div>
        <div className='circularProgress'>
            <CircularProgressbar
             value={percentage}
             text={`${percentage}%`}
             styles={{
                root: {},
                path: {
                  stroke: `rgb(89, 40, 229)`,
                  strokeLinecap: 'round',
                  transition: 'stroke-dashoffset 0.5s ease 0s',
                },
                trail: {
                  stroke: '#FFFFFF',
                },
                text: {
                  fill: '#000000',
                  fontSize: '2rem',
                },
                background: {
                  fill: '#3e98c7',
                },
              }}
    counterClockwise={true}
              
              />
        </div>
        <div className='progressLect'>
        {props.completedLect}/{props.totalLect} lectures
        </div>
    </div>
  )
}

export default CircularProgress;