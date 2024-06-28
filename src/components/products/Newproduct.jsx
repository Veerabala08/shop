import Productcard from "./Productcard";
import './ProductsCards.css'
function Newproduct() {

  const newArrivalsStyle = {
    fontFamily: 'IntegralCF',
    fontSize: '25px',
    fontWeight: 700,
    textAlign: 'center',
  };
  return (
    <>
        <p style={newArrivalsStyle}>New Arrivals</p>
      <div className="container">
        <div className="product-grid">
          <Productcard />
        </div>
      </div>
    </>
  );
}

export default Newproduct;
