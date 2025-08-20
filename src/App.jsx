import React from 'react'
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Stories from "./sections/Stories";
import Contact from "./sections/Contact";

const App = () => {
  return <div className = "container mx-auto max-w-7xl">
    <Navbar/>
    <Hero />
    <About />
    <Stories />
    <Contact />

  </div>;  
};

export default App
