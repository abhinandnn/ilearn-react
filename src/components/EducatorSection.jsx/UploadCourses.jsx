import React, { useEffect,useRef } from 'react'
import thumbPhoto from '../../assets/thumbPhoto.svg'
import { useState } from 'react';
import axios from '../../api/axios';
import { toast } from 'react-toastify';
import videoThumb from '../../assets/videoThum.svg'
import pdfThumb from '../../assets/addpdffile.svg'
import pdfThumb1 from '../../assets/pdfThumb.svg'
import videoBack from '../../assets/videoBack.svg'
import { useNavigate } from 'react-router-dom';
function UploadCourses() {
  const navigate=useNavigate()
    const [category,setCategory]=useState("")
  const [isOpen, setIsOpen] = useState(false);
  const [step,setStep]=useState(1);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
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
        "Others"
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
  const[courseId,setCourseId]=useState();
  const config = { headers: {'Authorization':`Bearer ${localStorage.getItem('authId')}`}, withCredentials: false };
  const handleSubmit=async(e)=>{
    e.preventDefault();
    if (description.length < 10) {
      toast.info('Description must be at least 10 characters long.');
      return;
    }
    if (title.length < 5) {
      toast.info('Title must be at least 5 characters long.');
      return;
    }
    try {
      const formData = new FormData();
      formData.append('image', file);
      formData.append('title', title);
      formData.append('description', description);
      formData.append('category', category);

      const response = await axios.post('/create-course', formData,config);
      console.log(response.data);
      toast.success(response.data.message);
      setCourseId(response.data.data.courseId)
      setStep(2);
      } catch (error) {
      console.error('Error creating course:', error.response);
    }
  };
  const handlePublish=async(e)=>{
    e.preventDefault();
    try{
    const response = await axios.post(`/publish-course/${courseId}`,
   {
    price:price,
    category:category,
    duration:duration
   } ,config);
      console.log(response.data);
      toast.success(response.data.message);
      setStep(4);
      } catch (error) {
      toast.error(error.response.data.message);
      console.error('Error publish course:', error.response);
    }
  }
    const [uploadVid,setUploadVid]=useState();
    const [vidfile, setVidFile] = useState(); 
    const [pdfFile,setPdfFile]=useState();
    const[vidTitle,setVidTitle]=useState()
    const [price,setPrice]=useState();
    const[duration,setDuration]=useState()
    const[pdfFileName,setPdfFileName]=useState();
    const uploadRef1 = useRef();
    const uploadRef0 = useRef();
    const statusRef = useRef();
    const progressRef = useRef();
  
    const UploadVideo = async () => {
      const fileVid = uploadRef0.current.files[0];
      setVidFile(fileVid);
    setFileName(fileVid.name);
    };
    const UploadFiles = async()=>{
      const fFile = uploadRef1.current.files[0];
      setPdfFile(fFile);
    setPdfFileName(fFile.name);
    }
    const uploadNex = async(e)=>{
    if(!vidfile)
    {
      toast.error('Select a video');
    }
    if(!vidTitle)
    {
      toast.error('Add a video title')
    }
    else{
    const formData = new FormData();
      formData.append("video", vidfile);
      formData.append("videoTitle", vidTitle);
      if(pdfFile)
      formData.append("notes", pdfFile);
      setUploadVid(true)
      try {
        const response = await axios.post(`/upload-video/${courseId}`, formData, {
          headers: {'Authorization':`Bearer ${localStorage.getItem('authId')}`}, 
          withCredentials: false,
          onUploadProgress: ProgressHandler
        });
      setUploadVid(false)
        console.log('up',response);
      toast.success(response.data.message);
      setVidTitle('');
      setVidFile('');
      setPdfFile('');
      } catch (error) {
        toast.error(error.response.message);
      }}
    }
  const UploadIt = async(e)=>{
    e.preventDefault();
    if(!vidfile)
    {
      toast.error('Select a video');
    }
    if(!vidTitle)
    {
      toast.error('Add a video title')
    }
    if(vidfile&&vidTitle){
    const formData = new FormData();
      formData.append("video", vidfile);
      formData.append("videoTitle", vidTitle);
      if(pdfFile)
      formData.append("notes", pdfFile);
      setUploadVid(true)
      try {
        const response = await axios.post(`/upload-video/${courseId}`, formData, {
          headers: {'Authorization':`Bearer ${localStorage.getItem('authId')}`}, 
          withCredentials: false,
          onUploadProgress: ProgressHandler
        });
        console.log('up',response);
      toast.success(response.data.message);
      setStep(3);

      } catch (error) {
        toast.error(error);
      }}}
    const ProgressHandler = (progressEvent) => {
      if(vidfile&&vidTitle)
      {
      const percent = (progressEvent.loaded / progressEvent.total) * 100;
      progressRef.current.value = Math.round(percent);
      statusRef.current.innerHTML = `${Math.round(percent)}%`;
    }}
  const back2=()=>{
    setUploadVid(false);
    setVidFile('');
    setPdfFile('');
  setVidTitle('');
setStep(2)  }
  
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
<div className={`uploadThumb1`} style={fileName?{background:`url(${fileUrl})`,backgroundColor:'#D9D9D9',backgroundSize:'contain',backgroundRepeat:'no-repeat',backgroundPosition:'center'}:{}}>
    
    {fileName?<><span>File selected:</span><div style={{fontSize:'1rem',wordWrap:'break-word',maxWidth:'20rem'}}>{fileName}</div><label className='customLabel' for="fileInput">Choose another file</label><input type="file" id="fileInput" name="fileInput" accept='.jpg,.jpeg,.png,.heic' onChange={handleFileChange}/></>:
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
<input required className='uploadTitle' placeholder='Choose a catchy title.'value={title}
onChange={(e) => setTitle(e.target.value)}  />
<span>Upload Description</span>

<textarea required className='uploadDescrip' placeholder='Type description that well 
explains your course.' rows={10} cols={7} maxLength={100} minLength={10}
value={description}
onChange={(e) => setDescription(e.target.value)}/>
                </div>
                </div>
                <div className='uploadStepButtons'>
                <button className='uploadCourseButton' type='button'>Cancel</button>
                <button className='uploadCourseButton'>Next</button>
                </div>
                </form>
                </>:(step===2?<>
                <form onSubmit={UploadIt}>
                <div className='uploadSec2' style={{paddingTop:'5rem'}}>
                {uploadVid?<><div className='uploadProg'><span>Your video is being uploaded</span><div style={{display:'flex',gap:'1rem',alignItems:'center'}}><progress className='custom-progress-bar' ref={progressRef} value="0" max="100" /><p ref={statusRef}></p></div></div></>:
                <>
                <span>Upload Title</span>
<input required style={{width:'49.6rem'}} className='uploadTitle' placeholder='Choose a catchy title.'value={vidTitle}
onChange={(e) => setVidTitle(e.target.value)}  />
                <div className='uploadSec' style={{paddingTop:'0'}}>
                <div className='uploadVertSec'>
                {<>
    <span>Upload Video</span>
                <label for="fileInput0"><div className={`uploadThumb1`} style={vidfile?{background:`url(${videoBack})`,backgroundColor:'#D9D9D9',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}:{}}>
    {vidfile?<></>:
    <>
<img src={videoThumb}/>
<input type="file" id="fileInput0" name="fileInput" ref={uploadRef0} accept=".mp4,.webm,.3gp,.mkv" onChange={UploadVideo}/></>}
</div></label>
   
    </>}
                    </div>
                    <div className='uploadVertSec'>
                    {<>
    <span>Upload File</span>
                <label for="fileInput"><div className={`uploadThumb1`} style={pdfFile?{background:`url(${pdfThumb1})`,backgroundColor:'#D9D9D9',backgroundRepeat:'no-repeat',backgroundPosition:'center'}:{}}>
    {pdfFile?<><span>File selected:</span><div style={{fontSize:'1rem',wordWrap:'break-word',maxWidth:'20rem'}}>{pdfFileName}</div></>:
    <>
<img src={pdfThumb}/>
<input type="file" id="fileInput" name="fileInput1" ref={uploadRef1} accept=".pdf" onChange={UploadFiles}/></>}
</div></label>
   
    </>}
                    </div>
                    </div>
                    </>
}
                    </div>
                    
                    <div className='uploadStepButtons'>
                <button className='uploadCourseButton' type='button' disabled={uploadVid} onClick={()=>navigate('/educator/home')}>Back</button>

                    <button className='uploadCourseButton' style={uploadVid?{paddingTop:'0.06rem',paddingBottom:'0.06rem',width:'10rem'}:{}} type='button' onClick={uploadNex}
                     disabled={uploadVid}>{uploadVid? (<svg className='sv' width="29"viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                     <circle cx="50" cy="50" r="45"/>
                     </svg>)
                       :("Add another lecture")}</button>
                    <button className='uploadCourseButton' disabled={uploadVid}>Next</button>
                </div>
                    </form>

                </>:(step===3?<>
                <div>
                <form onSubmit={handlePublish}>
            <div className='uploadSec'>
                <div className='uploadVertSec'>
                    <span>Set course price</span>
<input required type='number' className='uploadTitle' placeholder='Enter price in INR' value={price}
onChange={(e) => setPrice(e.target.value)}  />
<span>Set course duration</span>

<input required type='number' className='uploadTitle' placeholder='Enter duration in hours'value={duration}
onChange={(e) => setDuration(e.target.value)}  />
                </div>
                </div>
                <div className='uploadStepButtons'>
                <button className='uploadCourseButton' type='button' onClick={()=>back2()}>Back</button>
                <button className='uploadCourseButton'>Publish</button>
                </div>
                </form>
                </div>
                </>:<>
                </>))}
            </div>
    </div>
  )
}

export default UploadCourses