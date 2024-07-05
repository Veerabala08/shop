 import accountPNG from '../../../assets/icons/account.png'
import cartPNG from '../../../assets/icons/cart.png'
import { useNavigate } from "react-router-dom";
import {FiMenu, } from 'react-icons/fi';
import { IoClose } from "react-icons/io5";
import { RiSearch2Line } from "react-icons/ri";
import './Navbar.css'
import { useState, useEffect } from 'react';

function Navbar() {
    const navigate = useNavigate()
    const handleClick = ()=>{
        localStorage.clear();
        navigate("/")
        window.location.reload();
    }
    const[ open, setOpen]= useState(false);
    const handleToggle = ()=> setOpen(!open)

    const[ clicked, setClicked] = useState(false);
    const handleSearch =()=> {
        setClicked(!clicked)
    }
    useEffect(() => {
        const updateSize = () => {
          if (window.innerWidth > 600) {
            setClicked(false);
          }
        };
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
      }, []);

    return (  
        <>
        <nav className='navbar'>
           
        <div className='brand' onClick={()=>{navigate('/home')}}>
             <div  onClick={handleToggle}className='nav-icon'>
            {open ? <IoClose />
            :<FiMenu /> }
            </div>
          <div className= {clicked ?"hide-shopicon" : 'shopicon'}>
              SHOP.CO
            </div>
            
        </div>
        <div>
            <ul className={open ? 'menu active' : "menu"}>
                <li className='nav-items '>

                <select className='dropdown' name="category" id="category">
                <option >Shop</option>
                <option value="electronics">electronics</option>
                      <option value="jewelery">jewelery</option>
                      <option value="men's clothing">men's clothing</option>
                      <option value="women's clothing">women's clothing</option>
                </select>

                </li>
                <li className='nav-items '>On Sale</li>
                <li className='nav-items '>New Arrivals</li>
                <li className='nav-items '>Brands</li>
            </ul>
        </div>
        <input className={clicked ?"search-activate" : "search"} type="text" placeholder="Search for products"/>
        <div className='navicons'>
        <RiSearch2Line className='search-icon' onClick={handleSearch}/>        
        <img src = {accountPNG} onClick={handleClick}/>
        <img src = {cartPNG} onClick={()=>{navigate('/cart')}} />
        </div>
        </nav>
   
        </>
    );
}

export default Navbar;


