import React from "react";
import "./about.css";
import me2 from "../../assets/me2.jpg";
const About = () => {
    return (
        <div>
            <div id='about' className="about">
                <div className="about-title">
                    <h1>About Me</h1>
                </div>
                <div className="about-sections">
                    <div className="about-left">
                        <img src={me2} alt="" />
                    </div>
                    <div className="about-right">
                        <div className="about-para">
                            <p>Hi, I am a full stack developer. I have a passion for coding and I love to learn new things. I have a good knowledge of HTML, CSS, JavaScript,Phython,Java, React, Node.js,PHP, Laravel, Mysql, and many more. I am always ready to take on new challenges and learn new things. I am a quick learner and I am always looking to learn new things. I am always looking to improve my skills and knowledge.  I am always looking to improve my skills and knowledge.</p>

                        </div>
                        <div className="about-skills">
                            <h1>Skills Development</h1>
                            <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"75%"}} /></div>
                            <div className="about-skill"><p>JavaScript</p><hr style={{width:"50%"}} /></div>
                            <div className="about-skill"><p>React Js</p><hr style={{width:"60%"}} /></div>
                            <div className="about-skill"><p>PHP & Laravel</p><hr style={{width:"70%"}} /></div>
                        </div>
                    </div>
                </div>
                <div className="about-achievements">
                    <div className="about-achievement">
                        <h1>Education</h1>
                        <p>Bachelor of Technology</p>
                        <p>Computer Science and Engineering</p>
                        <p>2022-2026</p>
                    </div>
                    <hr />
                    <div className="about-achievement">
                        <h1>Experience</h1>
                        <p>Full Stack Developer</p>
                        <p>2023-2030</p>
                    </div>
                    <hr />
                    <div className="about-achievement">
                        <h1>Happy Clients</h1>
                        <p>Work Hard</p>
                        <p>Good In Communication Skill</p>
                    </div>

                </div>


            </div>
        </div>
    );
}
export default About