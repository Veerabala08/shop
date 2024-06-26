import Navbar from '../common/navbar/Navbar'
import Newproduct from '../products/Newproduct';
import { connect } from 'react-redux';
import Cart from "../cart/Cart"


function Home({ check }) {
    return (
        <>
            <Navbar />
            {check ? <Cart /> : <Newproduct />}
        </>
    );
}

const mapStateToProps = (state) => ({
    check: state.cart.check,
});

export default connect(mapStateToProps, null)(Home);
// {arr && console.log(arr.length)}