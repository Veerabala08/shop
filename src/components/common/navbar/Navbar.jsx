 import accountPNG from '../../../assets/icons/account.png'
import cartPNG from '../../../assets/icons/cart.png'
import { useNavigate } from "react-router-dom";
import {FiMenu, } from 'react-icons/fi';
import { IoClose } from "react-icons/io5";
import './Navbar.css'
import { useState } from 'react';

function Navbar() {
    const navigate = useNavigate()
    const handleClick = ()=>{
        localStorage.clear();
        navigate("/")
        window.location.reload();
    }
    const[ open, setOpen]= useState(false);
    const handleToggle = ()=> setOpen(!open)
    const closemenu = ()=>(false)
    return (  
        <>
        <nav className='navbar'>
           
        <div className='brand' onClick={()=>{navigate('/home')}}>
             <div  onClick={handleToggle}className='nav-icon'>
            {open ? <IoClose />
            :<FiMenu /> }
            </div>
            SHOP.CO
        </div>
        <div>
            <ul className={open ? 'menu active' : "menu"}>
                <li className='nav-items '><select className='dropdown' name="cars" id="cars">
                      <option value="volvo">Shop</option>
                      <option value="saab">Saab</option>
                      <option value="opel">Opel</option>
                      <option value="audi">Audi</option>
                    </select>
                </li>
                <li className='nav-items '>On Sale</li>
                <li className='nav-items '>New Arrivals</li>
                <li className='nav-items '>Brands</li>
            </ul>
        </div>
        <input className="search" type="text" placeholder="Search for products"/>
        <div className='navicons'>
        <img src = {accountPNG} onClick={handleClick}/>
        <img src = {cartPNG} onClick={()=>{navigate('/cart')}} />
        </div>
        </nav>
   
        </>
    );
}

export default Navbar;

