import { useState } from "react";
import {motion} from "motion/react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import ScrollToTop from "../components/ScrollToTop";

function Logo() {

    const handleClick = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };

    return (

        <ul className = "nav-ul">
            <li className = "nav-li">
                <Link className="nav-link text-sb" to="/">
                    <img src = {"assets/logo.png"} className = "w-23 h-14" onClick={handleClick}/>
                </Link>
            </li>
        </ul>
    )
}

function Sb() {

    const handleClick = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  
    return (
      <ul className="nav-ul">
        <li className="nav-li">
          <Link
            className="nav-link text-heading text-sb"
            to="/"
            onClick={handleClick}
          >
            storiesblossomed
          </Link>
        </li>
      </ul>
    );
  }

function Navigation({onNavigate}) {
    return ( 
        <ul className = "nav-ul">
            <li className = "nav-li hoverSmall">
                <HashLink smooth to="/#stories" className="nav-link text-sb" onClick={onNavigate}>Stories</HashLink>
                
            </li>

            <li className = "nav-li hoverSmall">
                <Link className="nav-link text-sb" to="/about" onClick={onNavigate}>About</Link>
            </li>

            <li className = "nav-li hoverSmall">
                <Link className="nav-link text-sb" to="/contact" onClick={onNavigate}>Contact</Link>
            </li>
        </ul>
    )
}
const Navbar = () => {
    const[isOpen, setIsOpen] = useState(false);
  return (
    <div className = 'fixed inset-x-0 z-20 w-full backdrop-blur-lg'>
        <div className = "mx-auto c-space max-w-7xl" >
            <div className = "flex items-center justify-between py-2 sm:py-0">
                <div className = "rotateHover ">
                    <Logo />
                </div>
            
                <div>
                    <Sb />
                </div>
                
                <button
                onClick = {() => setIsOpen(!isOpen)} className = "flex cursor-pointer text-sb hover: text-sbDark focus: outline-none sm:hidden"> 
                    <img src = {isOpen ? "assets/close.svg" : "assets/menu.svg"} className = "w-6 h-6" alt = "toggle" />
                </button>
                <nav className = "hidden sm:flex">
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
                <Navigation onNavigate={() => setIsOpen(false)} /> 
            </nav>
        </motion.div>)}
    </div>
  )
}

export default Navbar
