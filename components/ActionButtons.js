import React from 'react'
import styles from '../styles/ActionButtons.module.css';
import ShareButtons from './ShareButtons';
import { FaShoppingCart } from 'react-icons/fa'
import openAmazonLink from '../../utils';

export default function ActionButtons(props){
  return(
    <div className={styles.container} style={props.center ? {justifyContent: 'center'} : {}}>
      <ActionButton text={"Purchase e-book"}/>
    </div>
  )
}

function ActionButton(props){
  return(
    <div className={styles.button} onClick={()=>{openAmazonLink()}}>
      <FaShoppingCart/>
      <div className={styles.buttonText}>{props.text}</div>
    </div>
  )
}