import React, { useRef, useEffect, useState } from 'react';
import styles from '../styles/Story.module.css';

export default function Story(props){
  return(
    <div className={styles.outerContainer}>
      <div className={styles.container}>{props.children}</div>
    </div>
  )
}