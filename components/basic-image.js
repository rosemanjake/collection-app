import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from '../styles/BasicImage.module.css';

export default function BasicImage(props) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    threshold: 0.3, // change this value to determine how much of the element needs to be in view
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
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <motion.div
      ref={ref}
      className={styles.imageContainer}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{
        duration: 0.45,
        ease: 'easeOut',
      }}>
      <div className={styles.placeholder} />
      <img
        className={styles.image}
        src={props.image}
        alt=""
        style={{ opacity: imageLoaded ? 1 : 0 }}
      />
    </motion.div>
  );
}
