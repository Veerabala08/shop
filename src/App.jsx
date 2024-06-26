import "./App.css";
import Home from "./components/pages/Home.jsx"
import ProductDetails from "./components/products/ProductDetails.jsx";
import Cart from "./components/cart/Cart.jsx";
import { Routes, Route, } from "react-router-dom";


function App() {
  return (
    <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
    </>
  );
}

export default App;
