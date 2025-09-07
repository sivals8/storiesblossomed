import React from 'react'
import backVid from '/assets/sb_contactbg.mp4'

const ContactParallax = () => {
  return (

        <div className='relative w-full h-screen overflow-hidden' >
            {/*Background img */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover -z-50"
            >
                <source src= {backVid} type="video/mp4" />
            </video> 
                
    
        </div>

    
  )
}

export default ContactParallax;
