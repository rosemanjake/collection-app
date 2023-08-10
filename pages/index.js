import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Carousel from '../components/carousel.js'
import React, {useState, useEffect} from 'react'
import ActionButtons from '../components/ActionButtons';
import Header from '../components/header';

export default function Home() {
  // State variable to track whether the window is less than 800px wide
  const [isMobile, setIsMobile] = useState(false);

  // Effect hook to handle window resizing
  useEffect(() => {
    // Function to update isMobile state based on window width
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    handleResize()

    // Add the event listener to the window
    window.addEventListener('resize', handleResize);

    // Return a cleanup function to remove the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <>
    <div className={styles.background}/>
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <Head>
          <title>By the Fire</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header home={true} isMobile={isMobile}/>
        
        <Carousel isMobile={isMobile}/>
        <ActionButtons/>
      </div>
    </div>
    </>
  )
}