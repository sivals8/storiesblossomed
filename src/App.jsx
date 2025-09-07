import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About"; // can be used inside Home or separately
import Stories from "./sections/Stories";
import Contact from "./sections/Contact"; // same as above
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";     // new page
import ContactPage from "./pages/ContactPage"; // new page

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home route */}
        <Route
          path="/"
          element={
            <>
              <div className="container mx-auto max-w-7xl" path= "/">
                <Hero />
              </div>
              <div id = "stories">
                <Stories />
              </div>
              
            </>   
          }
        />

        {/* About page */}
        <Route path="/about" element={<About />} />

        {/* Contact page */}
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
