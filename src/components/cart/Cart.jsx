import { connect } from 'react-redux';
import { removecart, resetcheck } from '../redux/slices/cartSlice';
import './Cart.css'
const Cart = ({ cart, removecart, resetcheck }) => {
    let data = cart.data
    console.log(data)
    return (
        <div>
            <h2>Your Cart</h2>
            <button className="button" onClick={resetcheck}>
  <span className="X"></span>
  <span className="Y"></span>
  <div className="close">Close</div>
</button>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                data.map((item) => (
                    <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.title} />
                        <div>
                            <h3>{item.title}</h3>
                            <p>${item.price}</p>
                            <button onClick={() => removecart(item.id)}>Remove</button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    cart: state.cart.cart,
});

const mapDispatchToProps = {
    removecart,
    resetcheck,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
