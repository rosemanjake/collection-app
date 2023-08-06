import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Carousel from '../components/carousel.js'

export default function Home() {
  return (
    <>
    <div className={styles.background}></div>
    <div className={styles.container}>
      <Head>
        <title>By the Fire</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.titleContainer}>
          <h1 className={styles.mainTitle}>By the <span style={{color:"var(--red)"}}>Fire</span></h1>
          <h2 className={styles.subTitle}>A collection of short stories.</h2>
        </div>
        <Carousel/>
        
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400&family=Libre+Baskerville&display=swap');

        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Josefin Sans', sans-serif;
          y-overflow: hidden;
        }
        * {
          box-sizing: border-box;
        }
        :root {
          --dark:#343434;
          --light: #F9EFDA;
          --red: #F9350B;
          --darkred: #833424;
          

          --offWhiteBackground: #F9F1E1;
          --darkText: #343434;

          --goldRushPrimary: #FFB31F;
          --goldRushSecondary: #262D46;
          --shotgunPrimary: #FFFFFF;
          --shotgunSecondary: #4E1313;
          --theBearPrimary: #FFDE88;
          --theBearSecondary: #173A14;
          --parasocialPrimary: #9BC9FF;
          --parasocialSecondary: #886A3C;
          --hypochondriaPrimary: #FF773D;
          --hypochondriaSecondary: #365F62;
          --pigeonsPrimary: #E9435C;
          --pigeonsSecondary: #684678;
        
          --mainColumn: 95vw;
        }   
        
        @media (min-width: 800px) { 
          :root {
            --mainColumn: 80vw;
          }
        }

        @media (min-width: 1280px) { 
          :root {
            --mainColumn: 66vw;
          }
        }

        ::-webkit-scrollbar {
          width: 10px;
        }
        
        /* Track */
        ::-webkit-scrollbar-track {
          background: #f0f0f0; 
        }
         
        /* Handle */
        ::-webkit-scrollbar-thumb {
          background: #cdcdcd; 
        }
        
        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
        background: #a6a6a6; 
        }
      `}</style>
    </div>

    </>
  )
}
