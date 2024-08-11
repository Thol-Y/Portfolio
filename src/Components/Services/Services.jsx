import React from "react";
import "./services.css";
const Services = () => {
    return (
            <div id='services' className="services">
                <div className="servoces-title">
                    <h1>My Services</h1>
                </div>
                <div className="services-container">
                    <div className="service">
                        <h1>Web Development</h1>
                        <p>Web development is the work involved in developing a Web site for the Internet or an intranet.</p>
                    </div>
                    <div className="service">
                        <h1>Web Design</h1>
                        <p>Web design encompasses many different skills and disciplines in the production and maintenance of websites.</p>
                    </div>
                    <div className="service">
                        <h1>Mobile Development</h1>
                        <p>Mobile app development is the act or process by which a mobile app is developed for mobile devices.</p>
                    </div>
                    <div className="service">
                        <h1>UX/UI</h1>
                        <p>UX/UI design is the process design teams use to create products that provide meaningful and relevant experiences to users.</p>
                    </div>
                    <div className="service">
                        <h1>Front-end Developer</h1>
                        <p>Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application.</p>
                    </div>
                    <div className="service">
                        <h1>API Developer</h1>
                        <p>API development is the process of creating application programming interfaces that enable communication between software applications.</p>
                    </div>
                </div>
            </div>
        );
    }
    export default Services