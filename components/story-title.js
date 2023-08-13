import React, { useEffect } from 'react';
import styles from '../styles/StoryTitle.module.css';
import { motion, useAnimation } from "framer-motion";

export default function StoryTitle(props){
  const titleControls = useAnimation();
  const lineControls = useAnimation();
  const ballControls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await ballControls.start({ scale: 1.5, transition: { duration: 0.1, ease: 'linear' }});
      
      await Promise.all([
        ballControls.start({ scale: 1, transition: { duration: 0.4, ease: 'easeInOut' }}),
        lineControls.start({ width: '100%', transition: { duration: .4, ease: 'easeInOut' }}),
        titleControls.start({ y:'0%', transition: { duration: .4, ease: 'easeInOut' }})
      ]);
    }
    sequence();
  }, []);

  return(
    <>
      <div className={styles.titleContainer}>
        <motion.div className={styles.titleInnerContainer}
          initial={{ y:'200%'}}
          animate={titleControls}>
          <h1 className={props.darkMode ? styles.darkTitle : styles.title }>{props.title}</h1>
        </motion.div>
      </div>
      <div className={styles.lineContainer}>
        <motion.div className={props.darkMode ? styles.lineDark : styles.line}
          initial={{ width:'0%'}}
          animate={lineControls}
        />
        <motion.div className={props.darkMode ? styles.ballDark : styles.ball}
          initial={{ scale: 0 }}
          animate={ballControls}
        />
      </div>
    </>
  )
}
