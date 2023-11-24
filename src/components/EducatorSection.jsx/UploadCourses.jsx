import React, { useEffect,useRef } from 'react'
import thumbPhoto from '../../assets/thumbPhoto.svg'
import { useState } from 'react';
import axios from '../../api/axios';

function UploadCourses() {
    const [category,setCategory]=useState("")
  const [isOpen, setIsOpen] = useState(false);
  const [step,setStep]=useState(1);
    const toggleOpen = () => setIsOpen(!isOpen);
    const menuItems = [
        "Web Development",
        "App Development",
        "DSA",
        "UI/UX",
        "AI/ML",
        "Data Science",
        "AR/VR",
        "Personality Development",
        "Photography",
        "others"
      ];
const setCategory1 =(item)=>{
    setCategory(item);
    toggleOpen();
}
const [fileName, setFileName] = useState('');
const [file, setFile] = useState('');
const [fileUrl,setFileUrl]=useState('')

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setFileUrl(URL.createObjectURL(selectedFile));
    setFileName(selectedFile.name);
  };
  const handleSubmit=async(e)=>{
    e.preventDefault();
    setStep(2);
  }
    const [vidfile, setVidFile] = useState();
    const uploadRef = useRef();
    const statusRef = useRef();
    const progressRef = useRef();
  
    const UploadVideo = async () => {
      const file = uploadRef.current.files[0];
      setVidFile(file);
      const formData = new FormData();
      formData.append("video", file);
      try {
        const response = await axios.post("/fileupload", formData, {
          onUploadProgress: ProgressHandler
        });
  
        SuccessHandler(response);
      } catch (error) {
        ErrorHandler(error);
      }
    };
  
    const ProgressHandler = (progressEvent) => {
      const percent = (progressEvent.loaded / progressEvent.total) * 100;
      progressRef.current.value = Math.round(percent);
      statusRef.current.innerHTML = `${Math.round(percent)}% uploaded...`;
    };
  
    const SuccessHandler = (response) => {
      statusRef.current.innerHTML = response.data;
      progressRef.current.value = 0;
    };
  
    const ErrorHandler = (error) => {
      statusRef.current.innerHTML = "upload failed!!";
      console.error("Error uploading file:", error);
    };
  
  return (
    <div style={{background:'#F4F4F4'}}>
        <div className='uploadCourses1'>
            <span className='uploadCoursesStatement1'>Upload a Course</span>
            <div className='uploadStep'>
                <div className='uploadStep1 paintEffect'>
                    <span style={{position:'absolute',left:'-60%',top:'-6%'}}>Step</span>
                <span style={{fontSize:'9rem',lineHeight:"8rem"}}>{step}</span>/3
                </div>
            </div>
           {step===1? <>
                       <form onSubmit={handleSubmit}>
            <div className='uploadSec'>
                <div className='uploadVertSec'>
                    <span>Upload Thumbnail</span>
<div className={`uploadThumb1`}>
    {fileName?<><span>File selected:</span><div style={{fontSize:'1rem',wordWrap:'break-word',maxWidth:'20rem'}}>{fileName}</div></>:
    <>
<img src={thumbPhoto}/>
<label className='customLabel' for="fileInput">Choose file</label>
    <input type="file" id="fileInput" name="fileInput" accept='.jpg,.jpeg,.png,.heic' onChange={handleFileChange}/></>}
</div>
<span>Category</span>
<div className='uploadCat' onClick={toggleOpen}>
    {category?category:<span style={{ color:'#a9a9a9'}}>Select Category</span>}
    </div>
    {isOpen && (
        <div className="catMenuItems">
          {menuItems.map((item, index) => (
            <div key={index} className={`catMenuItem ${item == category ? 'selectedCat1' : ''}`} onClick={() => setCategory1(item)}>
              {item}
            </div>
          ))}
        </div>
      )}
                </div>
                <div className='uploadVertSec'>
                    <span>Upload Title</span>
<input required className='uploadTitle' placeholder='Choose a catchy title.'/>
<span>Upload Description</span>

<textarea required className='uploadDescrip' placeholder='Type description that well 
explains your course.' rows={10} cols={7} maxLength={100}/>
                </div>
                </div>
                <div className='uploadStepButtons'>
                <button className='uploadCourseButton'>Cancel</button>
                <button className='uploadCourseButton'>Next</button>
                </div>
                </form>
                </>:<>
                <div className='uploadSec'>
                <div className='uploadVertSec'>
                {vidfile?<div><progress ref={progressRef} value="0" max="100" /><p ref={statusRef}></p></div>:<>
                <label className='customLabel' for="fileInput">Upload Video</label>
    <input type="file" id="fileInput" name="fileInput" ref={uploadRef} onChange={UploadVideo}/>
    </>}
                    </div>
                    <div className='uploadVertSec'>
                    <button className='uploadCourseButton'>Upload file</button>
                    </div>
                    </div>
                </>}
            </div>
    </div>
  )
}

export default UploadCourses