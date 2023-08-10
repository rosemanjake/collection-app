import React, { useRef, useEffect, useState } from 'react';
import styles from '../styles/Info.module.css';

export default function Info(props){
  return(
    <div className={styles.outerContainer}>
      <div className={styles.container}>{props.children}</div>
    </div>
  )
}