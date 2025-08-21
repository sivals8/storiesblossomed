import React from 'react'
import HeroText from "../components/HeroText";
import PetalBackground from '../components/PetalBackground';
const Hero = () => {
  return  (
  <section className = "flex items-start justify-center md:items-start md: justify-start min-h-screen overflow-hidden c-space">
    <HeroText />
    <PetalBackground/>
  </section>
  );
};

export default Hero
