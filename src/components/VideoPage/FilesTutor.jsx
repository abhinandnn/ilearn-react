import React from 'react'
import './videoPage.css'
import pdfThumb from '../../assets/pdfThumb.svg'
import downloadIcon from '../../assets/download1.svg'
function FilesTutor(props) {
  return (
    <div className='filesTutor'>
<div className='filesStatement'>
{props.filesNum} files uploaded by tutor in this lecture
</div>
<div className='filesGrid'>
    {props.files.map((file)=>
    <div className='fileCard'>
<img src={pdfThumb}/>
<div className='pdfDet'>
    {file.title}
    <span>{file.size}</span>
</div><button>
<img src={downloadIcon}/>
</button>
    </div>
    )}
</div>
    </div>
  )
}

export default FilesTutor