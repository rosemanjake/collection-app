import React, {useEffect,useState} from 'react';
import styles from '../styles/NextContainer.module.css';
import ActionButtons from './ActionButtons';
import ShareButtons from './ShareButtons';
import Link from 'next/link';

import { motion } from 'framer-motion';

export default function NextContainer(props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
    >
      <div className={styles.line} />
      <div className={styles.container}>
        <div className={styles.innerContainerLeft}>
          <div className={styles.goodByeText}>
            {"Share this story on your favourite social network:"}
          </div>
          <ShareButtons fullWidth={true} light={props.darkMode} />
        </div>
        <div className={styles.innerContainerRight}>
          <NextStory currentStoryIndex={props.currentStoryIndex} />
        </div>
      </div>
    </motion.div>
  );
}


function NextStory({ currentStoryIndex }){
  const [nextTitle, setNextTitle] = useState("")
  const [nextImage, setNextImage] = useState("")
  const [nextUrl, setNextUrl] = useState("")

  useEffect(() => {
    switch (currentStoryIndex) {
      case 0:
        setNextTitle("Parasocial");
        setNextImage("/images/titles/parasocial.jpg");
        setNextUrl("/parasocial")
        break;
      case 1:
        setNextTitle("The Bear");
        setNextImage("/images/titles/thebear.jpg");
        setNextUrl("/the-bear")
        break;
      case 2:
        setNextTitle("Shotgun");
        setNextImage("/images/titles/shotgun.jpg");
        setNextUrl("/shotgun")
        break;
      case 3:
        setNextTitle("Salamander");
        setNextImage("/images/titles/hypochondria.jpg");
        setNextUrl("/salamander")
        break;
      case 4:
        setNextTitle("Twenty Euro");
        setNextImage("/images/titles/twentyeuro.jpg");
        setNextUrl("/twenty-euro")
        break;
      case 5:
        setNextTitle("Pigeons");
        setNextImage("/images/titles/pigeons.jpg");
        setNextUrl("/pigeons")
        break;
      case 6:
        setNextTitle("Murphy\'s Run");
        setNextImage("/images/titles/goldrush.jpg");
        setNextUrl("/run")
        break;
    }
  }, [currentStoryIndex]); // Adding currentStoryIndex as a dependency

  return(
    <>
    <Link href={nextUrl} className={styles.nextStoryContainer}>
      <div className={styles.nextUp}>Next up:</div>
      <div className={styles.nextImageContainer}>
        <img className={styles.nextImage} src={nextImage}></img>
      </div>
      <div className={styles.nextTitle}>{nextTitle}</div>
    </Link>
    </>
  )
}