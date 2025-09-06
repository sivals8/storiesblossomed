import React from 'react'
import { FlipWords } from './FlipWords';
import { motion } from 'motion/react';
import { ChevronDown} from "lucide-react"; // arrow icons

const HeroText = () => {
    const words = ["Memories", "Emotions", "Milestones", "Journeys", "Love", "Connections"]
    const variants = {
        hidden: {opacity: 0, x: -50},
        visible: {opacity: 1, x: 0},
    }
    const vertVariants = {
        hidden: {opacity: 0, y: 50},
        visible: {opacity: 1, y: 0}
    }
  return (
    <div className = "z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
        {/* Desktop View */}
        <div className = "flex-col hidden md:flex c-space">
            <motion.h1 
            className = "text-4xl font-medium"
            variants = {variants}
            initial = "hidden"
            animate = "visible"
            transition = {{delay: 1}}
            >Welcome to Storiesblossomed
            </motion.h1>
        
            <motion.p 
            className = "text-5xl font-medium text-sb"
            variants = {variants}
            initial = "hidden"
            animate = "visible"
            transition = {{delay: 1.2}}
            >
                We're a Team <br /> Dedicated to Capturing
            </motion.p>
            <motion.div
            variants = {variants}
            initial = "hidden"
            animate = "visible"
            transition = {{delay: 1.5}}
            >
                <FlipWords words = {words}
            className = "font-black text-sbDark text-8xl"
            />
            </motion.div>
            {/*<div> get flip word from acetrernity</div>*/}
            
        </div>
        {/* Mobile View */}
        <div className = "flex-col space-y-6 md:hidden">
            <motion.p className = "text-4xl font-medium"
            variants = {variants}
            initial = "hidden"
            animate = "visible"
            transition = {{delay: 1}}
            >
            Welcome to Storiesblossomed</motion.p>

            <motion.p className = "text-5xl font-medium text-sb"
            variants = {variants}
            initial = "hidden"
            animate = "visible"
            transition = {{delay: 1.2}}
            >
                Where We Capture</motion.p>
            <motion.div
            variants = {variants}
            initial = "hidden"
            animate = "visible"
            transition = {{delay: 1.5}}
            ><FlipWords words = {words}
            className = "font-black text-sbDark text-7xl"
            />
            </motion.div>
        </div>

        <div className = "absolute inset-0 flex items-end justify-center text-sb mb-8">
            <motion.div 
                className = "text-2xl font-medium text-sb"
                variants = {vertVariants}
                initial = "hidden"
                animate = "visible"
                transition = {{delay: 3}}>
                
                Scroll To Explore
                <div className = "flex justify-center">
                    <ChevronDown className = "text-sb w-8 h-8" />
                </div>

            </motion.div>
        </div>

            
      
    </div>
  );
};

export default HeroText
