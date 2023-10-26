import React, { useState, useEffect, useContext } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from '../styles/BasicImage.module.css';
import { DarkModeContext } from '../context/DarkModeProvider';

export default function BasicImage(props) {
  const { isDarkMode, setIsDarkMode, isMobile, setIsMobile } = useContext(DarkModeContext);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    threshold: 0.2, // change this value to determine how much of the element needs to be in view
    rootMargin: '20px 0px',
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Use effect to check if image is already loaded (cached)
  useEffect(() => {
    const img = new Image();
    img.src = props.image;
    img.onload = () => setImageLoaded(true);
  }, [props.image]);

  const variants = {
    hidden: { x: "10%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const mobileVariants = {
    hidden: { x: "0%", opacity: 0 },
    visible: { x: null, opacity: 1 },
  };

  useEffect(() => {
    // We'll start the animation over based on the new variant when isMobile changes
    controls.start("hidden").then(() => {
      controls.start("visible");
    });
  }, [controls, isMobile]); // Add isMobile as a dependency


  if (window.innerWidth === null) {
    return null; // You can return a loading spinner or something similar here if you like
  }

  return (
    <motion.div
      ref={ref}
      className= {isMobile ? styles.mobileImageContainer : styles.imageContainer }
      initial="hidden"
      animate={controls}
      variants={isMobile ? mobileVariants : variants}
      transition={{
        duration: 0.45,
        ease: 'easeOut',
      }}>
      {isMobile ? (
        <div className={styles.mobileImage} style={{ backgroundImage: `url(${props.image})` }} />
      ) : (
        <>
          <div className={styles.placeholder} />
          <img
          className={styles.image}
          src={props.image}
          alt=""
          style={{ opacity: imageLoaded ? 1 : 0 }}/>
        </>
        )}
    </motion.div>
  );
}
