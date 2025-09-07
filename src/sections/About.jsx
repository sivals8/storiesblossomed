import React from 'react';
import { Globe } from '../components/globe';
import { motion } from 'motion/react';

const About = () => {
  const variants = {
    hidden: {opacity: 1, x: 425},
    visible: {opacity: 1, x: 0}

  }

  return ( 
  
  <>

    <div className = "flex-1 c-space pt-40 h-[40%]">
      <motion.h2 
      className = 'text-heading text-left'
      variants = {variants}
      initial = "hidden"
      animate = "visible"
      transition = {{delay: 0.5}} 
      
      >
          About Us
      </motion.h2>

      <div 
        className = 'grid grid-cols-1 gap-4 md:grid-cols-6 md: auto-rows-[18rem] mt-12 pb-[40vh]'
      >
          {/*grid 1*/}
          <div className = "flex items-start grid-special-color grid-1">
            <div className = "z-10 w-full">
              <p className = "headtext">Our Goal</p>
              <p className = "subtext">
              At Stories Blossomed, we want to help bring your stories to life.
              Whether that be on your wedding day, an outing with your parents, a friend date, or even a walk with your pet.
              We want to showcase your story to the world in full blossom.
              </p>

              <div className = "flex justify-center">
                <img src="../assets/logo.png" className = ""/>
              </div>

            </div>
            
          </div>

          {/*grid 2*/}
          <div className = "flex items-start grid-special-color grid-2">
            <div className = "z-10 w-[50%]">
              <p className = "headtext">Location</p>
              <p className = "subtext">Based in Toronto and open to travel wherever your story takes you.</p>
              <figure className = 'absolute left-[37%] top-[10%]'>
                <Globe />
              </figure>
            </div>
          </div>
      </div>

        
    </div>
  </>
  )
}

export default About;
