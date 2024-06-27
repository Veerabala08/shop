/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { connect } from 'react-redux';
import { removecart , increasecount, decreasecount} from '../redux/slices/cartSlice';
import './Cart.css';

const Cart = ({ cart, removecart, increasecount, decreasecount }) => {

    let data = cart && cart.length > 0 ? cart : [];
    console.log('Cart data:', data);
    
    const calculateTotal = (cart) => {
        return cart.reduce((total, item) => total + item.data.price * item.count, 0);
    };

    const total = calculateTotal(cart);
    const discountPercentage = 20;
    const discount = (total * discountPercentage) / 100;
    const discountedTotal = total - discount;

    return (
        <>
        <div>
            <h2>Your Cart</h2>
            {data.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                data.map((item) => (
                    <div key={item.data.id} className="cart-item">
                        <img src={item.data.image} alt={item.data.title} />
                        <div>
                            <h3>{item.data.title}</h3>
                            <p>${item.data.price * item.count}</p>
                            <div><button onClick={()=>{item.count > 1 && decreasecount(item.data.id)}}>-</button><p>{item.count}</p><button onClick={()=>increasecount(item.data.id)}>+</button></div>
                            <button onClick={() => { 
                                console.log("Removing item with id:", item.data.id); 
                                removecart(item.data.id); // Pass item.id as payload
                            }}>Remove</button>
                        </div>
                    </div>
                ))
            )}
        </div>
            <div>
            <div className="order-summary">
                <h3>Order Summary</h3>
                <p>Total: ${total.toFixed(2)}</p>
                <p>Discount (20%): -${discount.toFixed(2)}</p>
                <h4>Discounted Total: ${discountedTotal.toFixed(2)}</h4>
            </div>
            </div>
        </>
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
    increasecount,
    decreasecount,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
