import React, { createContext, useState, useEffect } from 'react';

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Effect hook to handle window resizing
  useEffect(() => {
    // Function to update isMobile state based on window width
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    handleResize()

    // Add the event listener to the window
    window.addEventListener('resize', handleResize);

    // Return a cleanup function to remove the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode, isMobile, setIsMobile }}>
      {children}
    </DarkModeContext.Provider>
  );
}
