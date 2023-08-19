import styles from '../styles/CarouselCard.module.css';
import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link';

export default function CarouselCard(props){
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseOver = () => setIsHovered(true);
  const handleMouseOut = () => setIsHovered(false);

  useEffect(() => {
    const div = cardRef.current;

    div.addEventListener('mouseover', handleMouseOver);
    div.addEventListener('mouseout', handleMouseOut);

    return () => {
      div.removeEventListener('mouseover', handleMouseOver);
      div.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return(
    <motion.div 
      initial={{ y: "50%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeInOut", delay: props.data.id * 0.08 }}
      className={styles.carouselCard} 
      ref={cardRef}>
      <Link 
        style={{display:"block", position: "relative", height:"100%"}}
        href={props.data.link}>
      {isHovered &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}>
        <div className={styles.opaque}/>
        <div className={styles.border}/>
        </motion.div>
      }
        
      <div className={styles.titleContainer}>
        <div className={styles.image} style={{backgroundImage: `url(${props.data.image})`}}/>
        <div className={styles.textContainer}>
          <div>
            <h2 className={styles.title}>{props.data.title}</h2>
            <h3 className={styles.subTitle}>{props.data.subtitle}</h3>
          </div>
          <div>{props.data.time}</div>
        </div>
      </div>
      
      </Link>
    </motion.div>
  )
}

//  <img className={styles.image} src={props.data.image}/>