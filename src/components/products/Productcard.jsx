
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { getProducts } from "../redux/actions/productsAction";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './ProductsCards.css'
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

function Productcard({visibleProducts}) {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.productsState);
  useEffect(() => {
    dispatch(getProducts);
  }, []);

  function handlecart(product){
    console.log(product)
  }
  const renderSkeletons = () => {
    const skeletons = [];
    for (let i = 0; i < 4; i++) {
      skeletons.push(
        <div key={i} className="card">
          <Skeleton height={200} width={250} />
          <Skeleton width={250} height={20} />
          <Skeleton width={250} height={20} />
        </div>
      );
    }
    return skeletons;
  };


  return (
    <> 
      {loading ? (
        // Display multiple skeletons when loading
        renderSkeletons()
      ) : (products &&
       products.slice(0,visibleProducts).map((product) => (
          <div key={product.id} className="card">
            <Link to={`/product/${product.id}`}> 
            <div className="cardImg">
              <img src={product.image} alt="new arrivals"  />
            </div>
            </Link>            
            <p className="ctitle" onClick={() => handlecart(product)}>{product.title}</p>
            <Rating
      style={{ maxWidth: 80 }}
      value={product.rating.rate}
      readOnly
    />
            <p className="cprice">${product.price}</p>
          </div>
          )
        ))}
    </>
  );
}


export default Productcard;
