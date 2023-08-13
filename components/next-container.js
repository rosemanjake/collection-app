import React, {useEffect,useState} from 'react';
import styles from '../styles/NextContainer.module.css';
import ActionButtons from './ActionButtons';
import ShareButtons from './ShareButtons';

export default function NextContainer(props){
  return(
    <div className={styles.container}>
      <div className={styles.innerContainerLeft}>
        <div className={styles.goodByeText}>{"Share this story on your favourite social network:"}</div>
        <ShareButtons fullWidth={true} light={props.darkMode}/>
      </div>
      <div className={styles.innerContainerRight}>
        <NextStory currentStoryIndex={props.currentStoryIndex}/>
      </div>
    </div>
  ) 
}

function NextStory({ currentStoryIndex }){
  const [nextTitle, setNextTitle] = useState("")
  const [nextImage, setNextImage] = useState("")

  useEffect(()=>{
    switch(currentStoryIndex){
      case 0:
        setNextTitle("Parasocial")
        setNextImage("/images/titles/parasocial.png")
      case 1:
        setNextTitle("The Bear")
        setNextImage("/images/titles/thebear.png")
      case 2:
        setNextTitle("Shotgun")
        setNextImage("/images/titles/shotgun.png")
      case 3:
        setNextTitle("Hypochondira")
        setNextImage("/images/titles/hypochondria.png")
      case 4:
        setNextTitle("Pigeons")
        setNextImage("/images/titles/pigeons.png")
    }
  },[])

  return(
    <div className={styles.nextStoryContainer}>
      <div className={styles.nextUp}>Next up:</div>
      <div className={styles.nextImageContainer}>
        <img className={styles.nextImage} src={nextImage}></img>
      </div>
      <div className={styles.nextTitle}>{nextTitle}</div>
    </div>
  )
}