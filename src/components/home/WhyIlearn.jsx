import React from 'react'
import './home.css'
import ans1 from '../../assets/ans1.svg'
import ans2 from '../../assets/ans2.svg'
import ans3 from '../../assets/ans3.svg'
function WhyIlearn() {
  return (
    <div className='whyIlearn'>
        why ilearn?
        
        <div className='ansSec'>
            <span className='bigNum'>
                1
            </span>
            <div className='ansText'>
            <p>LEARN AT YOUR OWN PACE</p>
            <div className='writings'>
            Learn on your terms, but never alone. Enjoy lifetime access to your course with the 12 month access to the community
            </div>
            </div>
            <img className='ansImg'src={ans1}/>
        </div>
        <div className='ansSec'>
        <img className='ansImg'src={ans2}/>
            <span className='bigNum' id='big2'>
                2
            </span>
            <div className='ansText'>
            <p>Build your network</p>
            <div className='writings'>
            Join a growing community, get peer insights, and discover exciting business opportunities and collaborations.
            </div>
            </div>
            
        </div>
        <div className='ansSec'>
            <span className='bigNum'>
                3
            </span>
            <div className='ansText'>
            <p>Stay connected with your educator</p>
            <div className='writings'>
            Get a separate chat box to stay connected with your educator and ask doubts whenever you want
            </div>
            </div>
            <img className='ansImg'src={ans3}/>
        </div>
        <div className='userSay'>
            What our users have to say about us?
            <div className='writings'>
            iLearn have helped 100+ peoples to get their dream jobs
            </div>
        </div>
    </div>
  )
}

export default WhyIlearn