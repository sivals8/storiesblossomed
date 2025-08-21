import React from 'react'
import petals from "/assets/blossoms.webm"
import { motion, useScroll, useTransform} from "motion/react";
const PetalBackground = () => {
  return (
    <section className = "absolute inset-0"> 
        <div className = "relative h-screen overflow-y-hidden">
            <video
            className = "videoTag" autoPlay loop muted>
            <source src = {petals} type = "video/webm" />
            </video>

        </div>
    </section>
  )
}

export default PetalBackground
