import React from 'react'
import styles from '../styles/Footer.module.css';
import Link from 'next/link';
import openAmazonLink from '../utils';

export default function Footer(){
  return(
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.title}>By the Fire</div>
        <div className={styles.content}>
          <div className={styles.links}>
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <div onClick={()=>{openAmazonLink()}}>Book</div>
          </div>
          <div>© Jake Roseman, 2023</div>
        </div>
      </div>
    </div>
  )
}
