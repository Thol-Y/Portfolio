import React from "react";
import "./skill.css";
import html from "../../assets/html.jpg";
import jvs from "../../assets/jvs.png";
import react from "../../assets/react.png";
import php from "../../assets/php.png";
import py from "../../assets/py.jpg";
import vue from "../../assets/vue.png";
const Skill = () => {
    return (
        <div id='skills' className="skill">
            <h1 className="skill-tital">My Skills</h1>
            <div className="skill-container">
                <div className="skill-item">
                    <img src={html} alt="" />
                    <h2>HTML & CSS</h2>
                </div>
                <div className="skill-item">
                    <img src={jvs} alt="" />
                    <h2>JavaScript</h2>
                </div>
                <div className="skill-item">
                    <img src={react} alt="" />
                    <h2>React Js</h2>
                </div>
                <div className="skill-item">
                    <img src={php} alt="" />
                    <h2>PHP</h2>
                </div>
                <div className="skill-item">
                    <img src={py} alt="" />
                    <h2>Python</h2>
                </div>
                <div className="skill-item">
                    <img src={vue} alt="" />
                    <h2>Vue Js</h2>
                </div>
            </div>
        </div>
    );
}
export default Skill