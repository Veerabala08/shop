import Navbar from '../common/navbar/Navbar'
import Newproduct from '../products/Newproduct';
import { connect } from 'react-redux';
import Cart from "../cart/Cart"


function Home({ check }) {
    return (
        <>
            <Navbar />
            {check ? <Cart /> : <Newproduct />}
            <Newproduct />
        </>
    );
}

const mapStateToProps = (state) => ({
    check: state.cart.check,
});

export default connect(mapStateToProps, null)(Home);
// {arr && console.log(arr.length)}

// import Navbar from '../common/navbar/Navbar'
// import Newproduct from '../products/Newproduct';
// // import { connect } from 'react-redux';
// // import Cart from "../cart/Cart"


// // function Home({ check }) {
// function Home(){
//     return (
//         <>
//             <Navbar />
//             {/* {check ? <Cart /> : <Newproduct />} */}
//             <Newproduct />
//         </>
//     );
// }

// // const mapStateToProps = (state) => ({
// //     check: state.cart.check,
// // });

// // export default connect(mapStateToProps, null)(Home);
// export default Home;