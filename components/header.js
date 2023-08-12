import styles from '../styles/Header.module.css';
import {useState} from 'react';
import { motion, AnimatePresence } from "framer-motion"
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header(props) {
  const [displaySidebar, setDisplaySidebar] = useState(false)

  return (
      <div key={"header"} className={props.home && !props.isMobile ? styles.homeContainer : styles.container}>
        <div className={props.home && !props.isMobile ? styles.homeInnerContainer : styles.innerContainer}> 
          {props.home && !props.isMobile
            ? <HomeTitle/>
            : <Title/>
          }
          <AnimatePresence>
          {!displaySidebar &&
            <motion.div 
            className={styles.iconContainer}
            initial={{ y:'10%', opacity: 0 }}
            animate={{ y:'0%', opacity: 1 }}
            exit={{ y:'10%', opacity: 0 }}
            transition={{
              duration: 0.1,
              ease: 'easeInOut'
            }}
            >
            <div className={styles.innerIconContainer}>
              <img onClick={() => {props.setShowShare(!props.showShare)}} src={"/images/shareicon.svg"}/>
            </div>
            <div className={styles.innerIconContainer}>
              <img onClick={() => {props.setDarkMode(!props.darkMode)}} src={"/images/darkmode.svg"}/>
            </div>
            <div className={styles.innerIconContainer}>
              <img onClick={() => {setDisplaySidebar(!displaySidebar)}} src={"/images/hamburger.svg"}/>
            </div>
            </motion.div>
          }
          </AnimatePresence>
          <AnimatePresence>
              {displaySidebar &&
                <Sidebar setDisplaySidebar={setDisplaySidebar}/>
              }
            </AnimatePresence>
        </div>
      </div>
  )
}

//<MenuDot setDisplaySidebar={setDisplaySidebar}/>

function HomeTitle(){
  return(
    <div className={styles.titleContainer}>
      <Link className={styles.title} href={"/"}>By the <span style={{color: "var(--red)"}}>Fire</span></Link>
      <div className={styles.subtitle}>A collection of short stories</div>
    </div>
  )
}

function Title(){
  return(
    <Link className={styles.logo} href={"/"}>By the <span style={{color: "var(--red)"}}>Fire</span></Link>
  )
}

function MenuDot(props){
  const [showMenuText, setShowMenuText] = useState(false);

  return(
    <motion.div 
      key={"hamburger"} 
      className={styles.hamburger}
      onMouseEnter={() => setShowMenuText(true)}
      onMouseLeave={() => setShowMenuText(false)}
      onClick={() => {
        props.setDisplaySidebar(true);
        setShowMenuText(false); // Optionally hide the text when clicked
      }}
      initial={{ x:'20%' }}
      animate={{ x:'0%' }}
      exit={{ x:'20%' }}
      transition={{
        duration: 0.1,
        ease: 'easeInOut'
      }}
    >
      {showMenuText && 
        <motion.div 
        className={styles.menuText}
        initial={{ x:'25%', opacity: '0' }}
        animate={{ x:'0%',  opacity: '1' }}
        exit={{ x:'25%',  opacity: '0' }}
        transition={{
          delay: 0.1,
          duration: 0.1,
          ease: 'easeInOut'
        }}>
        Menu
        </motion.div>}
      <div className={styles.circle}></div>
    </motion.div>
  )
}

function Cross(props){
  // 45 x 45
  return(
    <>
    <motion.div  
      className={styles.cross} 
      onClick={() => {props.setDisplaySidebar(false)}}
      exit={{ rotate:360 }}
      transition={{
        duration: 0.4,
        ease: 'easeInOut'
      }}
      >
      <svg className="HamSVG AutoMargin" width={props.width} height={props.width} fill="var(--red)" viewBox="0 0 16 16"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/> </svg>
    </motion.div>
    </>
  )
}

function Sidebar(props){
  return(
    <motion.div
      key={"sidebar"}
      initial={{ x:'100%' }}
      animate={{ x:'0%' }}
      exit={{ x:'100%' }}
      transition={{
        duration: 0.4,
        ease: 'easeInOut'
      }}
      className={styles.sidebar}>
        <Cross key={"cross"}width={"45px"} height={"45px"} {...props}/>
        <div className={styles.sidebarLinks}>
          <SideBarLink innerText={"Home"} delay={0.00} url={"/"}/>
          <SideBarLink innerText={"About"} delay={0.07} url={"/about"}/>
          <SideBarLink innerText={"Book"} delay={0.14} url={"/"}/>
        </div>
      </motion.div>
  )
}

function SideBarLink(props) {
  const router = useRouter();
  // Declare a state variable to control the visibility of the child div
  const [isHovered, setIsHovered] = useState(false);
  

  // Function to handle mouse enter event
  const handleMouseEnter = () => {
    setIsHovered(true);
  }

  // Function to handle mouse leave event
  const handleMouseLeave = () => {
    setIsHovered(false);
  }

  const handleClick = () => {
    router.push(props.url); // Navigate to the home page
  }

  return (
    <div 
      className={styles.sidebarLinkContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <motion.div 
        key={props.innerText + "-sidebarLink"}
        initial={{ y: '200px' }}
        animate={{ y: '0%' }}
        transition={{
          duration: 0.6,
          ease: 'easeInOut',
          delay: props.delay
        }}
        className={styles.sidebarLink}
      >
        {props.innerText}
      </motion.div>

      {isHovered 
      ? <motion.div 
        key={props.innerText + "-sidebarLink"}
        initial={{ width: '0px' }}
        animate={{ width: '50%' }} /* Set margin-left for underline to be half of 100 minus this width value */
        exit={{ exit: '0px' }}
        transition={{
          duration: 0.2,
          ease: 'easeInOut',
        }}
        className={styles.underline}/>
      : <div className={styles.underlineInactive}/>
      }
    </div>
  )
}