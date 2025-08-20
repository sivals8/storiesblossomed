import React from 'react'

const About = () => {
  return ( <section className = "c-space section-spacing">
    <h2 classsName = 'text-heading'>About Me</h2>
    <div className = 'grid grid-cols-1 gap-4 md:grid-cols-6 md: auto-rows-[18rem] mt-12'>
        {/*grid 1*/}
        <div className = "flex items-end grid-default-color grid-1"></div>
        {/*grid 2*/}
        <div className = "flex items-end grid-default-color grid-2"></div>
        {/*grid 3*/}
        <div className = "flex items-end grid-default-color grid-3"></div>

        
    </div>
  </section>
  )
}

export default About
