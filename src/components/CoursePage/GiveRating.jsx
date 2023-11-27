import React, { useState } from 'react';
import fillStar from '../../assets/fillstar.svg'; 
import mtStar from '../../assets/mtstar.svg'; 
import { Modal } from 'react-overlays';
import { toast } from 'react-toastify';
import axios from '../../api/axios';
const GiveRating = ({id, onClose}) => {
  const [rating, setRating] = useState(0);
  const[description,setDescription]=useState()
  const handleClick = (selectedRating) => {
    setRating(selectedRating);
  };
  const config = { headers: {'Authorization':`Bearer ${localStorage.getItem('authId')}`}, withCredentials: false }

    const handleReviewSubmit = async () => {
      try {
        const response = await axios.post('/rate-course', {
          courseId:id,
          rating:rating.toString(),
          comment:description
        },config);
        console.log('Review submitted:', response.data);
toast.success('Review Submitted')
      onClose();
    } catch (error) {
      toast.info('Select Rating')
      console.error('Error submitting review:', error.response.data);
    }}
  return (
    
    <Modal
    opacity='0.5' show={true} onHide={onClose} className='modR'>
    <div className="giveRating">
        <div className='giveRating1'>
            <span>Give this course a rating</span>
        <div className='clickRate'>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          className={`star ${star <= rating ? 'filled' : ''}`}
          onClick={() => handleClick(star)}
        >
          {star <= rating ? <img src={fillStar} /> : <img src={mtStar} />}
        </span>
      ))}
      </div>
      </div>
      <div className='giveRating1'>
        <span>Write a review</span>
        <textarea className='revComment' rows={10} cols={7} maxLength={80}
value={description}
onChange={(e) => setDescription(e.target.value)}
/>
<div style={{display:'flex',gap:'1rem',alignItems:'center'}}><button style={{width:'8rem'}} className='courseCButton' id='postRev' onClick={handleReviewSubmit}>Post review</button>
<button id='resendButton' style={{color:'#5928E6'}} onClick={()=>onClose()}>Discard</button>

</div>
      </div>
    </div>
    </Modal>

  );
};

export default GiveRating;
