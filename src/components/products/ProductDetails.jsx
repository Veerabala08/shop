/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addtocart } from '../redux/slices/cartSlice';
import { getProduct } from "../redux/actions/productAction";
import Navbar from '../common/navbar/Navbar'
import './ProductsCards.css';

const ProductDetails = ({ addtocart }) => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { product, loading } = useSelector((state) => state.productState);
    const [count, setCount] = useState(1);

    useEffect(() => {
        dispatch(getProduct(id));
    }, [dispatch, id]);

    const handleAddToCart = () => {
        addtocart(product,count); // Dispatch addtocart action with product and count
        setCount(1); // Reset count after adding to cart 
    };

    if (loading) return <p>Loading...</p>;
    if (!product) return <p>Product not found.</p>;

    return (
        <>
        <Navbar />
        <div className="container">
            <div className="product-details">
              <div className="product-image">
                <img src={product.data.image} alt={product.data.title} className="pd-image" />
                </div>  
                <div className="pd-details">
                    <h2>{product.data.title}</h2>
                    <p className="price">${product.data.price * count}</p>
                    <p className="description">{product.data.description}</p>
                    <div className="pd-action-con">
                    <div className="pd-action">
                        <button className="pd-button" onClick={() => { count > 1 && setCount(count - 1) }}>-</button>
                        <span className="countSpan">{count}</span>
                        <button className="pd-button" onClick={() => setCount(count + 1)}>+</button>
                    </div>
                        <Link to={`/cart`}>
                        <button className="pd-button-cart" onClick={() => handleAddToCart(product,count)}>Add to cart</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

const mapDispatchToProps = {
    addtocart,
};

export default connect(null, mapDispatchToProps)(ProductDetails);
