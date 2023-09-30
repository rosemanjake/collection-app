import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Carousel from '../components/carousel.js'
import React, {useState, useEffect, useContext} from 'react'
import ActionButtons from '../components/ActionButtons';
import Header from '../components/header';
import { DarkModeContext } from '../context/DarkModeProvider';
import FloatingActionButton from '../components/FloatingActionButton';

export default function Home() {
  // State variable to track whether the window is less than 800px wide
  const { isDarkMode, setIsDarkMode, isMobile, setIsMobile } = useContext(DarkModeContext);

  return (
    <>
    <div className={styles.background}/>
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <Head>
          <title>By the Fire</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header home={true} onlyHamburger={true} isMobile={isMobile} setIsMobile={setIsMobile}/>
        <Carousel isMobile={isMobile}/>
        {isMobile && <FloatingActionButton/>}
        {!isMobile && <ActionButtons light={true}/>}
        
      </div>
    </div>
    </>
  )
}