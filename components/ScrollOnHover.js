import styles from '../styles/ScrollOnHover.module.css';
import React, { useRef, useEffect, useState } from 'react';

const ScrollOnHover = ({ targetRef, scrollAmount = 20, reverse = false }) => {
  const scrollInterval = useRef(null);
  const easingFactor = useRef(0);

  const startScrolling = () => {
    easingFactor.current = 0;
  
    scrollInterval.current = setInterval(() => {
      if (targetRef.current) {
        const isAtStart = targetRef.current.scrollLeft <= 0;
        const isAtEnd = targetRef.current.scrollLeft >= targetRef.current.scrollWidth - targetRef.current.clientWidth - 1; // Allow some tolerance        
        
        if ((reverse && isAtStart) || (!reverse && isAtEnd)) {
          stopScrolling();
          return; // Stop if at the boundary
        }
  
        easingFactor.current = Math.min(1, easingFactor.current + 0.05); // Increase easing factor up to 1
        const isHorizontal = window.innerWidth >= 800;
        const easeInQuad = (t) => t * t; // Quadratic easing function
        const delta = easeInQuad(easingFactor.current) * scrollAmount * (reverse ? -1 : 1); // Consider reverse prop
        const x = isHorizontal ? delta : 0;
        const y = isHorizontal ? 0 : delta;
        targetRef.current.scrollBy(x, y);
      }
    }, 20); // Faster interval for smoother scrolling
  };  

  const stopScrolling = () => {
    if (scrollInterval.current) {
      clearInterval(scrollInterval.current);
      scrollInterval.current = null;
    }
    easingFactor.current = 0;
  };

  return (
    <div
      onMouseOver={startScrolling}
      onMouseLeave={stopScrolling}
      className={`${styles.container} ${reverse ? styles.reverse : styles.forwards}`}
    >
      {reverse ? "<<" : ">>"}
    </div>
  );
};

export default ScrollOnHover;
