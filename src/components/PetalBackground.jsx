import React from 'react'
import petals from "/assets/blossoms.webm"

const PetalBackground = () => {
  return (
    <section className="absolute inset-0"> 
      <div className="relative h-screen overflow-y-hidden">
        {/* Hide on small screens, show on md+ */}
        <video
          className="hidden md:block absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={petals} type="video/webm" />
        </video>
      </div>
    </section>
  )
}

export default PetalBackground
