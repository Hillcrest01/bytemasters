// import React, {useState} from 'react'
// import "./Navbar.css"
// import { logo } from '../../images'

// const Navbar = () => {

//     // const quickLinks = navbar_links.map((link, index) => <li className='quick-links' key={index}> {link} </li>)
//     const [menu, setMenu] = useState('menu')

//   return (
//     <div className='navbar'>
//         <img src= {logo} alt="logo here" />
//         <ul>
//            <a href="#"><li onClick={()=>{setMenu("Home")}} className={menu === "Home" ? "active" : ""}> Home </li></a>
//            <a href="#"><li onClick={()=>{setMenu("About")}} className={menu === "About" ? "active" : ""}> About Us </li></a>
//            <a href="#"><li onClick={()=>{setMenu("Services")}} className={menu === "Services" ? "active" : ""}> Our Services </li></a>
//            <a href="#"><li onClick={()=>{setMenu("Help")}} className={menu === "Help" ? "active" : ""}> Help center </li></a>
//            <a href="#"><button> Get in Touch </button></a>
//         </ul>
//     </div>
//   )
// }

// export default Navbar



import React, { useState } from 'react';
import './Navbar.css';
import { logo } from '../../images';

const Navbar = () => {
    const [menu, setMenu] = useState('menu'); 
    const [isOpen, setIsOpen] = useState(false); 

    const handleMenuToggle = () => {
        setIsOpen(!isOpen); 
    };

    return (
        <div className="navbar">
            <img src={logo} alt="logo here" />
            
            <div className="hamburger" onClick={handleMenuToggle}>

                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>

            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <a href="/"><li onClick={() => { setMenu("Home"); setIsOpen(false); }} className={menu === "Home" ? "active" : ""}>Home</li></a>
                <a href="/about"><li onClick={() => { setMenu("About"); setIsOpen(false); }} className={menu === "About" ? "active" : ""}>About Us</li></a>
                <a href="/services"><li onClick={() => { setMenu("Services"); setIsOpen(false); }} className={menu === "Services" ? "active" : ""}>Our Services</li></a>
                <a href="/contact"><li onClick={() => { setMenu("Help"); setIsOpen(false); }} className={menu === "Help" ? "active" : ""}>Help Center</li></a>
                <a href="https://wa.link/qju2um"><button onClick={() => setIsOpen(false)}>Get in Touch</button></a>
            </ul>
        </div>
    );
};

export default Navbar;
