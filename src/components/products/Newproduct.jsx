
import Productcard from "./Productcard";
import './ProductsCards.css'
import { useState } from "react";

function Newproduct() {

  const [visibleProducts, SetVisibleProducts] = useState(4);

  const handleViewMore = ()=>{
    SetVisibleProducts((preVisibleProducts)=> preVisibleProducts+10);
  }

  const newArrivalsStyle = {
    fontFamily: 'IntegralCF',
    fontSize: '25px',
    fontWeight: 700,
    textAlign: 'center',
  };

  const button = {
    textAlign: 'center',
    minWidth:'200px',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '20px',
    backgroundColor: 'white',
    color:'black'
  }

  return (
    <>
        <p style={newArrivalsStyle}>New Arrivals</p>
      <div>
        <div className="product-grid">
          <Productcard visibleProducts={visibleProducts} />
        </div>
        <div style={{textAlign:'center', padding:'20px'}}>
        <button style={button} onClick={handleViewMore}>View More</button>
        </div>
      </div>
    </>
  );
}

export default Newproduct;
