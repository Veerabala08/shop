import { useEffect } from "react";
import { getProducts } from "../redux/actions/productsAction";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addtocart } from '../redux/slices/cartSlice';
import { connect } from "react-redux";
import './ProductsCards.css'

function Productcard({ addtocart }) {
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
            <img src={product.image} alt="new arrivals" className="cardImg" width={200} height={200}/>
            </Link>            
            <p className="title" onClick={() => handlecart(product)}>{product.title}</p>
            <p className="price">${product.price}</p>
            
          </div>
        ))}
    </>
  );
}

const mapDispatchToProps = {
  addtocart,
};

export default connect(null, mapDispatchToProps)(Productcard);
