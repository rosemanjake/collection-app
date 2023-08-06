import styles from '../styles/CarouselCard.module.css';
import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion'


export default function CarouselCard(props){
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseOver = () => setIsHovered(true);
  const handleMouseOut = () => setIsHovered(false);

  useEffect(() => {
    const div = cardRef.current;

    div.addEventListener('mouseover', handleMouseOver);
    div.addEventListener('mouseout', handleMouseOut);

    // Return a cleanup function that will remove the event listeners when the component is unmounted
    return () => {
      div.removeEventListener('mouseover', handleMouseOver);
      div.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return(
    <div className={styles.carouselCard} ref={cardRef}>
      {isHovered &&
        <>
        <div className={styles.opaque}/>
        <div className={styles.border}/>
        </>
      }
      <div className={styles.imageContainer}>
        <img className={styles.image} src={props.data.image}/></div>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>{props.data.title}</h2>
        <h3 className={styles.subTitle}>{props.data.subtitle}</h3>
      </div>
      <div className={styles.metadataContainer}>
        <div>{props.data.time}</div>
      </div>
            
    </div>
  )
}