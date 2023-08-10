import React from "react"
import styles from '../styles/InfoText.module.css';


export default function InfoText(props){
  return(
    <div className={styles.textContainer}>
      <div className={styles.para}>Foo</div>
      {props.text.split("\n").map((para, i) => {
          <InfoPara text={para} key={`para-${i}`}/>
        })}
    </div>
  )
}

function InfoPara(props){
  return(
    <div className={styles.para}>{props.text}</div>
  )
}