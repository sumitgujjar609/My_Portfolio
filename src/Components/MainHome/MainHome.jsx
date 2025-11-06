import React from "react";
import Home from "../Home/Home";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const MainHome = () => {
    return (
        <>
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </>
    );
};

export default MainHome;
