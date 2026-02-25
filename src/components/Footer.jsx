import React from 'react';

const Footer = () => {
  return (
    <footer 
    className = "w-full bg-sb/40 text-white py-10 text-center"
    >  
        <>
            <div className = "max-w-6xl mx-auto px-6 grid grid-cols-1 md: grid-cols-3 gap-8 text-center">
                {/*first column */}
                <div>
                    <h3 className = "text-lg font-semibold mb-3">About</h3>
                    <p className = "text-sm text-grey-400">
                    Let us show the world how your Stories Blossomed into what it is today.
                    </p>

                </div>

                {/*second column */}
                <div>
                    <h3 className = "text-lg font-semibold mb-3">Contact Us</h3>
                    <p className = "text-sm text-grey-400">
                    Bookings: info@photoem.net <br/>Info: storiesblossomed@gmail.com
                    </p>

                </div>

                {/*third column */}
                <div className = "text-center">
                    <h3 className = "text-lg font-semibold mb-3">Connect</h3>
                    
                    <div className = "flex justify-center space-x-6">
                        <a href="https://www.instagram.com/storiesblossomed" target="_blank" rel="noopener noreferrer" className = "hoverSmall">
                            <button>
                                <img src = "assets/instagram.svg" alt = "instagram" /> 
                            </button>
                        </a>

                        <a href="https://www.youtube.com/@storiesblossomed" target="_blank" rel="noopener noreferrer" className = "hoverSmall">
                            <button>
                                <img src = "assets/youtube.svg" alt = "youtube" /> 
                            </button>
                        </a>

                        <a href="https://www.tiktok.com/@storiesblossomed/" target="_blank" rel="noopener noreferrer" className = "hoverSmall">
                            <button>
                                <img src = "assets/tiktok.svg" alt = "tiktok" /> 
                            </button>
                        </a>

                    </div>

                </div>
                

            </div>

            <div className = "flex mx-auto items-end justify-center pt-20">
                <p>Copyright © {new Date().getFullYear()} | Stories Blossomed</p>
            </div>

        </>
    </footer>
  )
}

export default Footer;
