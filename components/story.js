import React, { useRef, useEffect, useState } from 'react';
import styles from '../styles/Story.module.css';

export default function Story(props){
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return(
    <div className={props.darkMode ? styles.darkOuterContainer : styles.outerContainer}>
      <div className={props.darkMode ? styles.darkContainer : styles.container}>{props.children}</div>
    </div>
  )
}