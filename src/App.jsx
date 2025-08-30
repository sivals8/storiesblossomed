import React from 'react'
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Stories from "./sections/Stories";
import Contact from "./sections/Contact";
import Admin from './sections/Admin';
import ReactPlayer from "react-player";

import { Canvas } from '@react-three/fiber';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return (
  <>
  <div className = "container mx-auto max-w-7xl">
    <Navbar/>
    <Hero />

  </div>


 <Stories />

  <div className = "container mx-auto max-w-7xl">
    <About />
    <Contact />
    <Admin />
  </div>

  </>
  );
};

export default App
