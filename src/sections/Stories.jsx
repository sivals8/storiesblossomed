import React, { useState, useEffect, useRef } from 'react';

import { Canvas } from '@react-three/fiber';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BlossomBackground from '../components/BlossomBackground';
import ReactPlayer from "react-player";
import petals from "/assets/blossoms.webm"

gsap.registerPlugin(ScrollTrigger);

const Stories = () => {
  const mainRef=useRef(null)
  const sceneRef=useRef(null)

  const [showVideo, setShowVideo] = useState(false);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".overlay-text", {
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: "#zoom-section",   // same section as your 3D zoom
        start: "top top",           // when animation begins
        end: "bottom bottom",       // when animation ends
        scrub: true,                // gradual fade tied to scroll
        onLeave: () => setShowVideo(true), // show video after scroll=
        onEnterBack: () => setShowVideo(false)
      },
    });
  }, []);


  return (
    <>
      {/*<div ref = {mainRef} className = "flex items-start justify-center md:items-start md: justify-start overflow-hidden c-space">Stories
      </div>*/}

      <div id="zoom-section" className = "relative w-screen h-[200vh] overflow-hidden">
        <Canvas className = "sticky top-0 w-full h-full" gl={{ alpha: true }}>
          <BlossomBackground/>
        </Canvas>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h1 className="overlay-text text-5xl font-medium text-sb">
            Scroll to Explore
          </h1>
        </div>

        {showVideo && (
          <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
            <ReactPlayer className = "mb-80"
              url="https://www.youtube.com/watch?v=o9LMsBAhwkk"
              controls={true}   // adds play/pause/volume controls
              playing={true}   // set to true for autoplay
              width="560px"
              height="315px"
            />
          </div>
        )}
 



      </div>

    </>
  );

};

export default Stories
