 import accountPNG from '../../../assets/icons/account.png'
import cartPNG from '../../../assets/icons/cart.png'
import './Navbar.css'

function Navbar() {
    return (  
        <>
        <nav className='navbar'>
        <div className='brand'>
            SHOP.CO
        </div>
        <div>
            <ul className='menu'>
                <li><select className='dropdown' name="cars" id="cars">
                      <option value="volvo">Shop</option>
                      <option value="saab">Saab</option>
                      <option value="opel">Opel</option>
                      <option value="audi">Audi</option>
                    </select>
                </li>
                <li>On Sale</li>
                <li>New Arrivals</li>
                <li>Brands</li>
            </ul>
        </div>
        <input className="search" type="text" placeholder="Search for products"/>
        <div className='navicons'>
        <img src = {accountPNG}/>
        <img src = {cartPNG} />
        </div>
        </nav>
   
        </>
    );
}

export default Navbar;

