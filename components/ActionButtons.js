import React from 'react'
import styles from '../styles/ActionButtons.module.css';

export default function ActionButtons(props){
  return(
    <div className={styles.container}>
      <ActionButton text={"Purchase e-book"}/>
      <ActionButton text={"Listen to audiobook"}/>
    </div>
  )
}

function ActionButton(props){
  return(
    <div className={styles.button}>
      <div className={styles.buttonText}>{props.text}</div>
    </div>
  )
}