import React, { useRef, useState } from "react";
import "./navbar.css";
import { Link } from 'react-scroll';
const Navbar = () => {
    const [menu,setMenu] = useState("");
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = "0";
    }
    const closeMenu = () => {
        menuRef.current.style.right = "-350px";
    }

    return (
        <div className="navbar">
            <h1 className="logo">Sithol Pen</h1>
            <svg onClick={openMenu} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="open" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
            <ul ref={menuRef} className="nav-menu">
            <svg onClick={closeMenu} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi-bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
            </svg>
                <li><Link to="home" smooth={true} duration={500}><p onClick={()=>setMenu("home")}>Home</p></Link>{menu==="home"?<hr/>:<></>}</li>
                <li><Link to="about " smooth={true} duration={500}><p onClick={()=>setMenu("about me")}>About Me</p></Link>{menu==="about me"?<hr/>:<></>}</li>
                <li><Link to="services" smooth={true} duration={500}><p onClick={()=>setMenu("services")}>Services</p></Link>{menu==="services"?<hr/>:<></>}</li>
                <li><Link to="skills" smooth={true} duration={500}><p onClick={()=>setMenu("skills")}>Skills</p></Link>{menu==="skills"?<hr/>:<></>}</li>
                <li><Link to="contact" smooth={true} duration={500}><p onClick={()=>setMenu("contact")}>Contact</p></Link>{menu==="contact"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-connect"><Link to="contact" smooth={true} duration={500}>Connect With Me</Link></div>
            
            
        </div>
    );
}
export default Navbar