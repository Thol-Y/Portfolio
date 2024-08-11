import React from "react";
import me from '../../assets/me.jpg';
import "./hero.css";
import { Link } from 'react-scroll';
const Hero = () => {
    return (
        <div id='home' className="hero">
            <img className="img" src={me} alt="" />
            <h1><span>My name is Pen Sithol.</span> Software Engeneering in Cambodia.</h1>
            <p>I am a Software Engeneering from Phnom penh,Cambodia with 2 year of experience in developing, testing, and deploying applications.</p>
            <div className="hero-action">
                <div className="hero-connect"><Link to="contact" smooth={true} duration={500}>Connect With Me</Link></div>
                <div className="hero-resume">My Resume</div>
            </div>
        </div>
    );
}
export default Hero