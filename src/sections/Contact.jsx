import React from 'react'
import ContactParallax from '../components/ContactParallax';
import {motion} from 'motion/react';
import { Repeat } from 'lucide-react';
const Contact = () => {

  const em = "EM Photography";
  const letters = em.split("");

  const letterVariants = {
    hidden: {scale: 1},
    visible: {
      scale: [1, 1.4, 1],
      transition: {duration: 0.2, repeat: Infinity, repeatDelay: 3}
    }
  }

  const soloVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1}
    }
  }

  const variants = {
    hidden: {opacity: 1, x: 425},
    visible: {opacity: 1, x: 0}
  }

  const vertVariants = {
    hidden: {opacity: 0, y: 50},
    visible: {opacity: 1, y: 0}
  }

  return (

      <>
      <div className = "relative w-screen h-screen " >
        <ContactParallax />

        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        
      </div>

        {/* Overlay text */}
        <div className="c-space absolute inset-0 mt-40 ">
          <motion.h2 
            className = 'text-heading text-left'
            variants = {variants}
            initial = "hidden"
            animate = "visible"
            transition = {{delay: 0.5}} 
            
            >
                Contact Us
            </motion.h2>

          <motion.h2 
          className='text-center text-heading mt-12'  
          
          variants = {vertVariants}
            initial = "hidden"
            animate = "visible"
            transition = {{delay: 1}} 
          >
            Let us Capture your Story
          </motion.h2>

          <div 
            href="https://emphotography.vsco.page/" 
            target="_blank" 
            rel="noopener noreferrer" 
          >
            <motion.p 
            className="text-white text-center grid-default-color w-[40%] mx-auto absolute left-1/2 -translate-x-1/2" 
            style = {{top: '60vh'}}
            variants = {vertVariants}
            initial = "hidden"
            animate = "visible"
            transition = {{delay: 1.2}} 
            >
            Please visit{" "}
            <motion.a 
              href="https://emphotography.vsco.page/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-xlflex justify-center"
              variants={soloVariants}
              initial="hidden"
              animate="visible"

            >
              { "EM Photography".split("").map((letter, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  variants={letterVariants}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
              
            </motion.a>{" "}for all bookings.
          </motion.p>
        </div>

        </div>

      </>
  )
};

export default Contact;
