import Remove from "../../../assets/icons/remove.png"
import './footer.css'

function Footer() {
  return (
    <>
      <div className="footer1">
        <div className="footer-black">
        <div className="footer-text">
            <p>Stay upto Date About <br />Our Latest Offers</p>
    </div>
        <div className="footer-text2">
            <input className="footer-input" placeholder="Enter your email address"></input><br />
            <button className="subscription">Subscribe to Newsletter</button>
        </div>
        </div>
      </div>
      <div >
        <div className="footer-grid">
          <div className="footer-grid-items1">
            <h1 style={{fontFamily:'IntegralCF' }}>SHOP.CO</h1>
            <div style={{fontSize:'small', color:'#00000099'}}>
              We have clothes that suits your style and which you're proud to
              wear .Form women to men
            </div>
            <div>
              <img src={Remove}/>
              <img src={Remove}/>
              <img src={Remove}/>
              <img src={Remove}/>
            </div>
          </div>
          <div className="footer-grid-items">
            <h4 style={{fontFamily: 'Satoshi', lineHeight:'18px'}}>Company</h4>
            <p>About</p>
            <p>Feature</p>
            <p>Works</p>
            <p>Career</p>
          </div>
          <div className="footer-grid-items">
            <h4 style={{fontFamily: 'Satoshi'}}>Help</h4>
            <p>Customer Support</p>
            <p>Delivery Details</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
          <div className="footer-grid-items">
            <h4 style={{fontFamily: 'Satoshi'}}>FAQ</h4>
            <p>Account</p>
            <p>Manage Deliveries</p>
            <p>Orders</p>
            <p>Payments</p>
          </div>
          <div className="footer-grid-items">
            <h4 style={{fontFamily: 'Satoshi'}}>Resources</h4>
            <p>Free eBooks</p>
            <p>Development Tutorial</p>
            <p>How to - Blog</p>
            <p>Youtube Playlist</p>
          </div>
        </div>
        <hr />
        <div className='footer-last'>
            <div>shop.co 2000-2003. All Rights Reserved</div>
        <div>
          <img src={Remove} />
          <img src={Remove} />
          <img src={Remove} />
          <img src={Remove} />
          <img src={Remove} />
        </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
