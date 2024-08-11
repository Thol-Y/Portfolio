import React from "react";
import Navbar from "./Components/Navbar/navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Skill from "./Components/Skills/Skill";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
const App = () => {
    return (
        <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Services/>
        <Skill/>
        <Contact/>
        <Footer/>
        </div>
    );

}
export default App