import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../redux/actions/productAction";
import './ProductsCards.css';
import { addtocart } from '../redux/slices/cartSlice';
import { connect } from "react-redux";
import Navbar from '../common/navbar/Navbar'
import { Link } from "react-router-dom";

const ProductDetails = ({ addtocart }) => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { product, loading } = useSelector((state) => state.productState);
    const [Count, setCount] = useState(1);
    const check=false
    useEffect(() => {
        dispatch(getProduct(id));
    }, [dispatch, id]);

    if (loading) return <p>Loading...</p>;
    if (!product) return <p>Product not found.</p>;

    return (
        <>
        <Navbar />
            <div className="product-details">
                <img src={product.data.image} alt={product.data.title} className="pd-image" />
                <div className="pd-details">
                    <h2>{product.data.title}</h2>
                    <p>${product.data.price * Count}</p>
                    <p>{product.data.description}</p>
                    <div>
                        <button className="pd-button" onClick={() => { Count > 1 && setCount(Count - 1) }}>-</button>
                        <span className="countSpan">{Count}</span>
                        <button className="pd-button" onClick={() => setCount(Count + 1)}>+</button>
                        <Link to={`/cart`}>
                        <button className="pd-button" onClick={() => addtocart(product,check)}>Add to cart</button>
                        </Link>
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
