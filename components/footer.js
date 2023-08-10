import React from 'react'
import styles from '../styles/Footer.module.css';
import Link from 'next/link';

export default function Footer(){
  return(
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.title}>By the Fire</div>
        <div className={styles.content}>
          <div className={styles.links}>
            <Link href={"/about"}>About</Link>
            <Link href={"/about"}>Contact</Link>
            <Link href={"/about"}>E-book</Link>
          </div>
          <div>© Jake Roseman, 2023.</div>
        </div>
      </div>
    </div>
  )
}
