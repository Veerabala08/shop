import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import './Review.css'

const reviews = [
    {
      "name": "John Doe",
      "rating": 5,
      "comments": "Great product! Highly recommend it.",
      "postedDate": "2024-06-25"
    },
    {
      "name": "Jane Smith",
      "rating": 4,
      "comments": "Good quality, but the delivery was late.",
      "postedDate": "2024-06-20"
    },
    {
      "name": "Emily Johnson",
      "rating": 3,
      "comments": "It's okay, but I've seen better.",
      "postedDate": "2024-06-15"
    },
    {
      "name": "Michael Brown",
      "rating": 5,
      "comments": "Excellent! Will buy again.",
      "postedDate": "2024-06-10"
    },
    {
      "name": "Sarah Davis",
      "rating": 2,
      "comments": "Not what I expected. Poor quality.",
      "postedDate": "2024-06-05"
    }
  ]
  
const ProductComments = ()=> {
    
    return ( 
        <div className="review">
                <h6 className="heading">All Reviews({reviews.length})<span><button className="w-review">Write Review</button></span></h6>
            
        <div className="parent-grid">
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
        </div>
        </div>
     );
}

export default ProductComments;