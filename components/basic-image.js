import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from '../styles/BasicImage.module.css';

export default function BasicImage(props) {
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

  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    // Set the initial value for window width when the component is mounted
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (windowWidth === null) {
    return null; // You can return a loading spinner or something similar here if you like
  }

  return (
    <motion.div
      ref={ref}
      className={windowWidth < 800 ? styles.mobileImageContainer : styles.imageContainer }
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{
        duration: 0.45,
        ease: 'easeOut',
      }}>
      {windowWidth < 800 ? (
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
