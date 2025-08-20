import { useState } from "react";
import {motion} from "motion/react";
function Navigation() {
    return ( 
        <ul className = "nav-ul">
            <li className = "nav-li">
                <a className = "nav-link text-sb" href = "#home">Home</a>
            </li>

            <li className = "nav-li">
                <a className = "nav-link text-sb" href = "#stories">Stories</a>
            </li>

            <li className = "nav-li">
                <a className = "nav-link text-sb" href = "#about">About</a>
            </li>

            <li className = "nav-li">
                <a className = "nav-link text-sb" href = "#contact">Contact</a>
            </li>
        </ul>
    )
}
const Navbar = () => {
    const[isOpen, setIsOpen] = useState(false);
  return (
    <div classname = 'fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40'>
        <div className = "mx-auto c-space max-w-7xl" >
            <div className = "flex items-center justify-between py-2 sm:py-0">
            <button>
                
                    <img src = {isOpen ? "assets/logo.png" : "assets/logo.png"} className = "w-30 h-18" />
                </button>
                <a 
                href = "/"
                className = "text-xl font-bold transition-colors text-sb hover:text-sbDark">storiesblossomed
                </a>
                <button
                onClick = {() => setIsOpen(!isOpen)} className = "flex cursor-pointer text-sb hover: text-sbDark focus: outline-none sm:hidden"> 
                    <img src = {isOpen ? "assets/close.svg" : "assets/menu.svg"} className = "w-6 h-6" alt = "toggle" />
                </button>
                <nav className = "hidden sm:flex ">
                    <Navigation />
                </nav>

            </div>
        </div>
        {isOpen && (<motion.div className = "block overflow-hidden text-center sm:hidden "
            initial = {{ opacity: 0, x: -10}}
            animate = {{ opacity: 1, x: 0}}
            style = {{ maxHeight: "100vh"}}
            transition = {{ duration: 1}}
        >
            <nav className = "pb-5"> 
                <Navigation /> 
            </nav>
        </motion.div>)}
    </div>
  )
}

export default Navbar
