// import React from 'react';
import { connect } from 'react-redux';
import { removecart, resetcheck } from '../redux/slices/cartSlice';
import './Cart.css';

const Cart = ({ cart, removecart, resetcheck }) => {
    // Extract data from the nested structure
    let data = cart && cart.length > 0 ? cart.map(item => item.data) : [];
    console.log('Cart data:', data); // Debugging line

    return (
        <div>
            <h2>Your Cart</h2>
            <button className="button" onClick={resetcheck}>
                <span className="X"></span>
                <span className="Y"></span>
                <div className="close">Close</div>
            </button>
            {data.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                data.map((item) => (
                    <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.title} />
                        <div>
                            <h3>{item.title}</h3>
                            <p>${item.price}</p>
                            <button onClick={() => { 
                                console.log("Removing item with id:", item.id); 
                                removecart(item.id); // Pass item.id as payload
                            }}>Remove</button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

const mapStateToProps = (state) => {
    console.log('Redux state:', state); // Debugging line
    return {
        cart: state.cart.cart, // Ensure correct mapping to the cart state
    };
};

const mapDispatchToProps = {
    removecart,
    resetcheck,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
