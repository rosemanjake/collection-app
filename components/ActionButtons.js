import React from 'react'
import styles from '../styles/ActionButtons.module.css';
import ShareButtons from './ShareButtons';

export default function ActionButtons(props){
  return(
    <div className={styles.container}>
      <ActionButton text={"Purchase e-book"}/>
      <ShareButtons url={props.url} title={"By the Fire"} fullWidth={false} light={props.light}/>
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