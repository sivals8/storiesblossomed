import React from 'react'
import backVid from '/assets/inquiry-bg.webm' /*new file from videographer*/

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
                <source src= {backVid} type="video/webm" />
            </video> 
                
    
        </div>

    
  )
}

export default ContactParallax;
