import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useSelector } from "react-redux";
import './Review.css'

const ProductComments = ()=> {
  const reviews = useSelector((state)=>state.reviews);
    
    return (  
        <>
            {reviews.map((review, index)=>
                (<div className="child-grid" key={index}>
                    <Rating
                    style={{ maxWidth: 80, paddingTop: '20px' }}
                    value={review.rating}
                    readOnly />
                    <p className="child-name">{review.name}</p>
                    <p className="child-comment">{review.comments}</p>
                    <p className="child-date">Posted On {review.postedDate}</p>
                </div>)
            )
          }
        </>
        
        
     );
}

export default ProductComments;