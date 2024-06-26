import Productcard from "./Productcard";
import './ProductsCards.css'
function Newproduct() {
  return (
    <>
      
        <p>New Arrivals</p>
        <div className="product-grid">
          <Productcard />
        </div>
    </>
  );
}

export default Newproduct;
