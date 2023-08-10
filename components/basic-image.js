import React from 'react'
import styles from '../styles/BasicImage.module.css';

export default function BasicImage(props){
  return(
    <div className={styles.imageContainer}>
      <img className={styles.image} src={props.image}/>
    </div>
    
  )
}