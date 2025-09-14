import React, { useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BlossomBackground from "../components/BlossomBackground";
import { ChevronLeft, ChevronRight } from "lucide-react"; // arrow icons

gsap.registerPlugin(ScrollTrigger);

const Stories = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [videos, setVideos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const frontUrl = "https://sbadmin-portal.onrender.com";
  const containerRef = useRef(null);

  // Fetch videos from Strapi
  useEffect(() => {
    const fetchVideos = () => {
      fetch("https://sbadmin-portal.onrender.com/api/videos?populate=thumbnail")
        .then((res) => res.json())
        .then((data) => {
          if (data.data && data.data.length > 0) {
            const thumb = "https://sbadmin-portal.onrender.com/uploads/medium_IMG_9314_33033a0e62.jpeg";
            const formatted = data.data.map((item) => ({
              id: item.id,
              youtubeId: item.youtubeId,
              thumbnail:
                thumb, 
              name: item.description[0]?.children[0]?.text || "",
            }));
            setVideos(formatted);
          }
        })
        .catch((err) => console.error("Error fetching videos:", err));
    };

    console.log(formatted);

    fetchVideos();
    const interval = setInterval(fetchVideos, 10000);
    return () => clearInterval(interval);
  }, []);

  // Scroll trigger to reveal section
  useEffect(() => {
    gsap.to(".overlay-text", {
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: "#zoom-section",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onLeave: () => setShowVideo(true),
        onEnterBack: () => setShowVideo(false),
      },
    });
  }, []);

  // Navigation
  const handleNext = () => {
    setCurrentIndex((curr) => (curr + 1) % videos.length); //mod for wrapping feature
  };
  const handlePrev = () => {
    setCurrentIndex((curr) => (curr - 1 + videos.length) % videos.length);
  };

  // Helpers
  const getIndex = (offset) =>
    (currentIndex + offset + videos.length) % videos.length;

    useEffect(() => {
      if (!containerRef.current) return;
  
      const ctx = gsap.context(() => {
        gsap.fromTo(
          ".slide",
          { opacity: 0, scale: 1.2, y: 60 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
          }
        );
      }, containerRef);
  
      return () => ctx.revert();
    }, [currentIndex, showVideo]);

  return (
    <div
      id="zoom-section"
      className="relative w-screen h-[200vh] overflow-hidden"
      ref = {containerRef}
    >
      {/* 3D Canvas background */}
      <Canvas className="sticky top-0 w-full h-full" gl={{ alpha: true }}>
        <BlossomBackground />
      </Canvas>

      {/* Overlay text */}
      <div className="absolute inset-0 flex items-start justify-center pointer-events-none " 
      style={{ textShadow: "2px 2px 10px rgba(121,68,83,1)", top: "50vh" }}
      >
        <h1 className="overlay-text text-5xl font-medium text-white">
          Stories
        </h1>
      </div>

      {/* Focused content viewer */}
      {showVideo && videos.length > 0 && (
        <div className="absolute inset-0 flex flex-col items-center justify-end mb-20">
          <div className="relative flex items-center justify-center w-full">
            {/*Left arrow on side */}
            <button
              onClick = {handlePrev}
              className = "absolute left-[27%] z-20 bg-plum/50 hover:bg-plum/70 p-3 rounded-full"
            >
              <ChevronLeft className = "text-sb w-6 h-6" />
            </button>

            {/* Previous (left, small) */}
            <a
              href={videos[getIndex(-1)].youtubeId}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute left-[15%] transform -translate-x-1/2 scale-75 opacity-60 transition-all duration-500"ß
            >
              <img
                src={videos[getIndex(-1)].thumbnail}
                className="w-[240px] h-[135px] object-cover rounded-lg shadow-md"
              />
            </a>

            {/* Current (center, large) */}
            <a
              href={videos[getIndex(0)].youtubeId}
              target="_blank"
              rel="noopener noreferrer"
              className="z-10 scale-100 transition-all duration-500"
            >
              <div className="relative w-[560px] h-[315px] rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={videos[getIndex(0)].thumbnail}
                  alt={videos[getIndex(0)].name}
                  className="slide w-full h-full object-cover"
                />
                <p
                  className="absolute inset-0 flex items-end justify-center text-2xl text-sb mb-5"
                  style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
                >
                  {videos[getIndex(0)].name}
                </p>
              </div>
            </a>

            {/*right arrow on side */}
            <button
              onClick = {handleNext}
              className = "absolute right-[27%] z-20 bg-plum/50 hover:bg-plum/70 p-3 rounded-full"
            >
              <ChevronRight className = "text-sb w-6 h-6" />
            </button>

            {/* Next (right, small) */}
            <a
              href={videos[getIndex(1)].youtubeId}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute right-[15%] transform translate-x-1/2 scale-75 opacity-60 transition-all duration-500"
            >
              <img
                src={videos[getIndex(1)].thumbnail}
                className="w-[240px] h-[135px] object-cover rounded-lg shadow-md"
              />
            </a>
          </div>

          
        </div>
      )}
    </div>
  );
};

export default Stories;
