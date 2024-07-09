import Productcomments from './ProductComments'
import './Review.css'
import  FAQ from './FAQ'
import { useState } from 'react';
import { useSelector } from "react-redux";

function Review() {

 const reviews = useSelector((state)=>state.reviews);
 const [view, setView]=useState('comments')
 const handleclick=(view)=>{
    setView(view)
 }


    return ( 
        <>
        <div className='review-headings'>
            <p className={view == 'details' && 'line'} onClick={()=>handleclick('details')}>Products Details</p>
            <p className={view == 'comments' && 'line'} onClick={()=>handleclick('comments')}>Rating & Reviews</p>
            <p className={view == 'faq' && 'line'} onClick={()=>handleclick('faq')}>FAQ</p>
        </div>
        <hr style={{width:'100%', marginTop:'-17px'}}/>
        {view == "comments" && (
         <div className="review">
         <h6 className="heading">All Reviews({reviews.length})<span><button className="w-review">Write Review</button></span></h6>
         <div className="parent-grid">
         < Productcomments/>
         </div>
         </div>
      )}
        {view == "faq" && < FAQ/>}
        </>
     );
}

export default Review;