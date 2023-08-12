import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/ScrollOnHover.module.css';

const ScrollOnHover = ({ targetRef, scrollAmount = 20, reverse = false, visible }) => {
  const scrollInterval = useRef(null);
  const easingFactor = useRef(0);

  const startScrolling = () => {
    easingFactor.current = 0;
  
    scrollInterval.current = setInterval(() => {
      if (targetRef.current) {
        const isAtStart = targetRef.current.scrollLeft <= 0;
        const isAtEnd = targetRef.current.scrollLeft >= targetRef.current.scrollWidth - targetRef.current.clientWidth - 1;
        
        if ((reverse && isAtStart) || (!reverse && isAtEnd)) {
          stopScrolling();
          return; // Stop if at the boundary
        }
  
        easingFactor.current = Math.min(1, easingFactor.current + 0.05);
        const isHorizontal = window.innerWidth >= 800;
        const easeInQuad = (t) => t * t;
        const delta = easeInQuad(easingFactor.current) * scrollAmount * (reverse ? -1 : 1);
        const x = isHorizontal ? delta : 0;
        const y = isHorizontal ? 0 : delta;
        targetRef.current.scrollBy(x, y);
      }
    }, 20);
  };

  const stopScrolling = () => {
    if (scrollInterval.current) {
      clearInterval(scrollInterval.current);
      scrollInterval.current = null;
    }
    easingFactor.current = 0;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      onMouseOver={startScrolling}
      onMouseLeave={stopScrolling}
      onTouchStart={startScrolling} // Start scrolling on touch start
      onTouchEnd={stopScrolling}   // Stop scrolling on touch end
      className={`${styles.container} ${reverse ? styles.reverse : styles.forwards}`}
    >
      {reverse ? "<" : ">"}
    </motion.div>
  );
};

export default ScrollOnHover;
