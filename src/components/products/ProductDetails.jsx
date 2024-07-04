/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addtocart } from "../redux/slices/cartSlice";
import { getProduct } from "../redux/actions/productAction";
import Navbar from "../common/navbar/Navbar";
import "./ProductsCards.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ProductDetails = ({ addtocart }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, loading } = useSelector((state) => state.productState);
  const [count, setCount] = useState(1);

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  const handleAddToCart = () => {
    addtocart(product, count); // Dispatch addtocart action with product and count
    setCount(1); // Reset count after adding to cart
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="product-details">
          <div className="product-image">
            {loading ? (
              <Skeleton height={400} width={300} />
            ) : (
              <img
                src={product?.data?.image}
                alt={product?.data?.title}
                className="pd-image"
              />
            )}
          </div>
          <div className="pd-details">
            <h2 className="pd-title">
              {loading ? (
                <Skeleton width={400} count={2} />
              ) : (
                product?.data?.title
              )}
            </h2>
            {loading ? <Skeleton width={100} count={1} /> :  <Rating
              style={{ maxWidth: 80, paddingTop:'20px' }}
              value={product?.rating?.rate}
              readOnly
            />}
           

            <p className="price">
              {loading ? (
                <Skeleton width={100} />
              ) : (
                `$${product?.data?.price * count}`
              )}
            </p>
            <p className="description">
              {loading ? <Skeleton  width={400} count={5} /> : product?.data?.description}
            </p>
            {!loading && (
              <div className="pd-action-con">
                <div className="pd-action">
                  <button
                    className="pd-button"
                    onClick={() => {
                      count > 1 && setCount(count - 1);
                    }}
                  >
                    -
                  </button>
                  <span className="countSpan">{count}</span>
                  <button
                    className="pd-button"
                    onClick={() => setCount(count + 1)}
                  >
                    +
                  </button>
                </div>
                <Link to={`/cart`}>
                  <button className="pd-button-cart" onClick={handleAddToCart}>
                    Add to cart
                  </button>
                </Link>
              </div>
            )}
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
