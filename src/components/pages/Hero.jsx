
import Heroimg from "../../assets/icons/hero.png";
import disha from "../../assets/icons/disha.png"
import zara from "../../assets/icons/zara.png"
import gucci from "../../assets/icons/gucci.png"
import prada from "../../assets/icons/prada.png"
import versace from "../../assets/icons/versace.png"
import "./Hero.css";

function Hero() {
  return (
    <><div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">
          Find clothes
          <br /> that matches
          <br /> your style
        </h1>
        <p className="hero-description">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style
        </p>
        <button className="hero-button">Shop Now</button>
        <div className="hero-stats">
          <div className="hero-stat">
            <h4>200+</h4>
            <p>International Brands</p>
          </div>
          <div className="hero-stat">
            <h4>2000+</h4>
            <p>High-Quality Products</p>
          </div>
          <div className="hero-stat">
            <h4>200+</h4>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>
      <div className="hero-image-container">
        <img src={Heroimg} className="hero-image" alt="Hero" />
      </div>
    </div>
    <div className="strap">
      <img src={disha} />
      <img src={zara} />
      <img src={gucci} />
      <img src={prada} />
      <img src={versace} />
    </div>
    </>
  );
}

export default Hero;
