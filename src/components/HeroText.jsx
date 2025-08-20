import React from 'react'

const HeroText = () => {
  return (
    <div className = "z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
        {/* Desktop View */}
        <div className = "flex-col hidden md:flex c-space">
            <h1 className = "text-4xl font-medium">Welcome to Storiesblossomed</h1>
        </div>
        {/* Mobile View */}
      
    </div>
  );
};

export default HeroText
