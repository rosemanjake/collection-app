import React from 'react'
import styles from '../styles/StoryTitle.module.css';

export default function StoryTitle(props){
  return(
    <>
    <h1 className={styles.title}>{props.title}</h1>
    <div className={styles.line}/>
    </>
  )
}