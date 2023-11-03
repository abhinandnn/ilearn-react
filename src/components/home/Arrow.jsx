import React from 'react'

function Arrow(img) {
  return (
    <div className='arrow'>
        <button><img src={img}/></button>
    </div>
  )
}

export default Arrow