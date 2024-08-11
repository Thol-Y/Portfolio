import React from "react";
import "./footer.css";
import user from "../../assets/user.png";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <h1>Sithol Pen</h1>
                    <p>I am a Software Engeneering from Phnom penh,Cambodia with 2 year of experience in developing, testing, and deploying applications.</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                        </svg>
                        <input type="email" placeholder="Enter Your Email" />
                    </div>
                    <div className="Like-Me">Like Me</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">2024 Pen Sithol. All rights reserved.</p>
                <div className="footer-bottom-mid">
                    <p>Portfolio</p>
                    <p>About Me</p>
                    <p>Contact Me</p>
                </div>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    );
    };
    export default Footer;