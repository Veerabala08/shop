// import ProductComments from '../products/ProductComments'
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useSelector } from "react-redux";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function HappyCus() {

const reviews = useSelector((state)=>state.reviews);
const container ={
  width : 'calc(100% + 7vw)',
  marginLeft : '-5vw',
  marginRight : '-3vw',
  padding : '20px',
    }

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 150, min: 0 },
          items: 1
        }
      };
      const itemStyle = {
        padding: '10px', // Adjust this value to create the desired spacing
        boxSizing: 'border-box',
      }
      
    return ( 
        <>
        <div style={container}>
            <h1>Our Happy Customer</h1>
            <Carousel responsive={responsive}>
          {reviews.map((review, index) => (
            <div style={itemStyle} key={index}>
              <div className="child-grid">
                <Rating
                  style={{ maxWidth: 80, paddingTop: '20px' }}
                  value={review.rating}
                  readOnly
                />
                <p className="child-name">{review.name}</p>
                <p className="child-comment">{review.comments}</p>
                <p className="child-date">Posted On {review.postedDate}</p>
              </div>
            </div>
          ))}
        </Carousel>
        </div>
        </>
     );
}

export default HappyCus;


