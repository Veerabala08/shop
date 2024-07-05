
import Home from "./components/pages/Home.jsx"
import ProductDetails from "./components/products/ProductDetails.jsx";
import Cart from "./components/cart/Cart.jsx";
import Login from "./components/pages/Login.jsx"
import { Routes, Route, } from "react-router-dom";
import Footer from "./components/common/footer/Footer.jsx"

function App() {

  const getEmail = localStorage.getItem("emailData")
  const getPassword = localStorage.getItem("passwordData")
  const container = {
    maxWidth: '90%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', 
    margin: '0 auto',
  };
  return (
    <>
    <div style={container}>
            <Routes>
            <Route path={"/"} element={<Login />} />
                {
                getEmail&&getPassword ? 
                <>
                <Route path="/home" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} /> 
                </>
                : <Route path={"/"} element={<Login />} />
                }
            </Routes>
      </div> 
      { getEmail&&getPassword ?  <Footer />:''}
    </>
  );
}

export default App;
