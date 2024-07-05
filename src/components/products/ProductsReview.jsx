import Productcomments from './ProductComments'
import './Review.css'
import  FAQ from './FAQ'
import { useState } from 'react';
function Review() {

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
        {view == "comments" && < Productcomments/>}
        {view == "faq" && < FAQ/>}
        </>
     );
}

export default Review;