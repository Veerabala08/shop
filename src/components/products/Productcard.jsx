
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { getProducts } from "../redux/actions/productsAction";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './ProductsCards.css'

function Productcard() {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.productsState);
  useEffect(() => {
    dispatch(getProducts);
  }, []);

  function handlecart(product){
    console.log(product)
    // addtocart(product,check)
  }
  if (loading) return <p>Loading...</p>;

  if (!products) return <p>Product not found.</p>;

  return (
    <> 
      {products &&
        products.map((product) => (
          <div key={product.id} className="card">
            <Link to={`/product/${product.id}`}> 
            <div className="cardImg">
              <img src={product.image} alt="new arrivals"  width={200} height={200}/>
            </div>
            </Link>            
            <p className="ctitle" onClick={() => handlecart(product)}>{product.title}</p>
            <p className="cprice">${product.price}</p>
          </div>
        ))}
    </>
  );
}


export default Productcard;
