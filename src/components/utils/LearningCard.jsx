import React from 'react'
import playB from '../../assets/playB.svg'

import { CircularProgressbar } from 'react-circular-progressbar';
function LearningCard(props) {
    const percentage=Math.floor((props.completedLect/props.totalLect)*100);
  return (
   
        <div className='learningCard'>
             <div className='learningCardTop'>
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
            <div className='lCardTitle'>
                {props.title}
            </div>
        </div>
        <div className='learningDet'>
            <div className='resumeLearning'>
                <img src={playB}/>
                <span>Resume</span>
            </div>
        <button className='catChip'>{props.category}</button>
    </div></div>
  )
}

export default LearningCard