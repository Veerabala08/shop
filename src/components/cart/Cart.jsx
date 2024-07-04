/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { connect } from "react-redux";
import {
  removecart,
  increasecount,
  decreasecount,
} from "../redux/slices/cartSlice";
import "./Cart.css";
import Navbar from "../common/navbar/Navbar";
import Remove from "../../assets/icons/remove.png"

const Cart = ({ cart, removecart, increasecount, decreasecount }) => {
  let data = cart && cart.length > 0 ? cart : [];
  console.log("Cart data:", data);

  const calculateTotal = (cart) => {
    return cart.reduce(
      (total, item) => total + item.data.price * item.count,
      0
    );
  };

  const total = calculateTotal(cart);
  const discountPercentage = 20;
  const discount = (total * discountPercentage) / 100;
  const discountedTotal = total - discount;
  const hrStyle = {
    // border: 'none',
    border: '1px solid #0000001A', // Customize the color and thickness
    margin: '20px 0', // Customize the margin
  };
  return (
    <>
      <Navbar />
      <h2>Your Cart</h2>
      <div className="wcart">
        <div className="cart">
          {data.length === 0 ? (
            <p
              style={{
                width: "300px",
                padding: "10px",
                fontSize: "large",
                fontWeight: "bold",
              }}
            >
              Your cart is empty.
            </p>
          ) : (
            data.map((item) => (
              <>
              <div key={item.data.id} className="cart-item">
                <img src={item.data.image} alt={item.data.title} />
                <div className="cart-action">
                  <h3>{item.data.title}</h3>
                  <p>${item.data.price * item.count}</p>
                </div>
                <div className="cart-action">
                  <img style={{ marginTop:'16px'}} src = {Remove} onClick={() => {
                      console.log("Removing item with id:", item.data.id);
                      removecart(item.data.id); // Pass item.id as payload
                    }} width={'20px'} height={'20px'}/>
                  <div className="count-div">
                    <button
                      onClick={() => {
                        item.count > 1 && decreasecount(item.data.id);
                      }}
                    >
                      -
                    </button>
                    <span className="countspan">{item.count}</span>
                    <button onClick={() => increasecount(item.data.id)}>
                      +
                    </button>
                  </div>
                </div>
              </div>
             { data.length > 1 ? <hr style={hrStyle} /> : <></>}
              </>
              
            ))
          )}
        </div>
        <div>
          <div className="order-summary">
          <h3>Order Summary</h3>
  <p>
    <span>Total:</span> <span>${total.toFixed(2)}</span>
  </p>
  <p>
    <span>Discount (20%):</span> <span style={{color:'red'}}>-${discount.toFixed(2)}</span>
  </p>
  <h4>
    <span>Discounted Total:</span> <span>${discountedTotal.toFixed(2)}</span>
  </h4>
  
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log("Redux state:", state); // Debugging line
  return {
    cart: state.cart.cart, // Ensure correct mapping to the cart state
  };
};

const mapDispatchToProps = {
  removecart,
  increasecount,
  decreasecount,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
