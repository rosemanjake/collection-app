import React from "react"
import styles from '../styles/ShareDialog.module.css';
import { motion, AnimatePresence } from "framer-motion";
import ActionButtons from "./ActionButtons";
import ShareButtons from "./ShareButtons";

export default function ShareDialog({ setDisplayShareDialog }){
  return(
    <motion.div 
      className={styles.container}
      initial={{ y:'5%', opacity: 0 }}
      animate={{ y:'0%', opacity: 1 }}
      exit={{ y:'5%', opacity: 0 }}
      transition={{
        duration: 0.2,
        ease: 'easeInOut'
      }}>
      <div className={styles.dialog}>
        <div className={styles.cross} onClick={() => {setDisplayShareDialog(false)}}>x</div>
        <div className={styles.innerContainer}>
          <div className={styles.text}>Share Murphy's Run on your favourite social network:</div>
          <ShareButtons fullWidth={true}/>
        </div>
      </div>
    </motion.div>
  )
}