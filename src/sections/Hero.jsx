import React from 'react'
import HeroText from "../components/HeroText";
import PetalBackground from '../components/PetalBackground';

import { Canvas } from '@react-three/fiber';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BlossomBackground from '../components/BlossomBackground';

import ReactPlayer from "react-player";

gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  return  (
  <>
    <section className = "flex items-start justify-center md:items-start md: justify-start min-h-screen overflow-hidden c-space">
      <HeroText />
      <PetalBackground />
    </section>

  </>
  );
};

export default Hero
