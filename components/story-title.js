import React from 'react'
import styles from '../styles/StoryTitle.module.css';

export default function StoryTitle(props){
  return(
    <>
    <h1 className={props.darkMode ? styles.darkTitle : styles.title }>{props.title}</h1>
    </>
  )
}