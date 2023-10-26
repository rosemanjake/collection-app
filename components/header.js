import styles from '../styles/Header.module.css';
import {useState, useContext, useEffect} from 'react';
import { motion, AnimatePresence } from "framer-motion"
import Link from 'next/link';
import { useRouter } from 'next/router';
import ShareDialog from './share-dialog';
import { DarkModeContext } from '../context/DarkModeProvider';
import openAmazonLink from '../utils';

export default function Header({home = false, onlyHamburger = false}) {
  const [displaySidebar, setDisplaySidebar] = useState(false)
  const [displayShareDialog, setDisplayShareDialog] = useState(false)
  const { isDarkMode, setIsDarkMode, isMobile, setIsMobile } = useContext(DarkModeContext);

  if (home === undefined || home === null){
    return(<></>)
  }

  return (
    <div key={"header"} className={home && !isMobile ? styles.homeContainer : styles.container}>
      <div className={home && !isMobile ? styles.homeInnerContainer : styles.innerContainer}> 
        {home && !isMobile
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
          style={home || onlyHamburger ? {width: "70px"} : {}}
          >
          <div className={styles.innerIconContainer} style={home && !isMobile ? {alignItems:"flex-start"}: {alignItems:"center"}} onClick={() => {setDisplayShareDialog(!displayShareDialog)}}>
            <HeaderIcon type={"share"}/>
          </div>
          {!onlyHamburger &&
          <>
            <div className={styles.innerIconContainer} style={home && !isMobile ? {alignItems:"flex-start"}: {alignItems:"center"}} onClick={() => {setIsDarkMode(!isDarkMode)}}>
              <HeaderIcon type={"dark"}/>
            </div>
          </>
          }
          <div className={styles.innerIconContainer} style={home && !isMobile ? {alignItems:"flex-start"}: {alignItems:"center"}} onClick={() => {setDisplaySidebar(!displaySidebar)}}>
            <HeaderIcon type={"hamburger"}/>
          </div>
          </motion.div>
        }
        </AnimatePresence>
        <AnimatePresence>
          {displaySidebar &&
            <Sidebar setDisplaySidebar={setDisplaySidebar}/>
          }
        </AnimatePresence>
        <AnimatePresence>
          {displayShareDialog &&
            <ShareDialog setDisplayShareDialog={setDisplayShareDialog}/>
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
      <Link className={styles.title} href={"/"}>Murphy's <span style={{color: "var(--red)"}}>Run</span></Link>
      <div className={styles.subtitle}>A collection of short stories</div>
    </div>
  )
}

function Title(){
  return(
    <Link className={styles.logo} href={"/"}>Murphy's <span style={{color: "var(--red)"}}>Run</span></Link>
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
        <Cross key={"cross"} width={"45px"} height={"45px"} {...props}/>
        <div className={styles.sidebarLinks}>
          <SideBarLink innerText={"Home"} delay={0.00} url={"/"}/>
          <SideBarLink innerText={"About"} delay={0.07} url={"/about"}/>
          <SideBarLink innerText={"Book"} delay={0.14} onClick={()=>{openAmazonLink()}}/>
        </div>
        <div className={styles.copyright}>© Jake Roseman, 2023</div>
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
    if (props.onClick){
      props.onClick()
    }else{
      router.push(props.url); // Navigate to the home page
    }
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

const HeaderIcon = ({ url, type, func }) => {
  const { isHoverCapable } = useContext(DarkModeContext);
  const [color, setColor] = useState("#F9EFDA");

  const handleMouseEnter = () => {
    if (!isHoverCapable) return;
    setColor('#F9350B');
  };

  const handleMouseLeave = () => {
    if (!isHoverCapable) return;
    setColor("#F9EFDA");
  };

  return (
    <div onClick={func} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {type == "share" &&
        <ShareIconSvg color={color} />
      }
      {type == "dark" &&
        <DarkModeIconSvg color={color} />
      }
      {type == "hamburger" &&
        <HamburgerIconSvg color={color} />
      }
    </div>
  );
};

const ShareIconSvg = ({ color = "#F9EFDA" }) => (
  <svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16.9783" cy="4.02128" r="4.02128" fill={color}/>
    <circle cx="16.9783" cy="18.7654" r="4.02128" fill={color}/>
    <circle cx="4.02128" cy="12.0633" r="4.02128" fill={color}/>
    <line x1="17.7156" y1="3.95323" x2="4.75816" y2="11.549" stroke={color} stroke-width="3"/>
    <line x1="16.2617" y1="18.7959" x2="3.32778" y2="12.0532" stroke={color} stroke-width="3"/>
  </svg>
);

const DarkModeIconSvg = ({ color = "#F9EFDA" }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="9.5" stroke={color}/>
    <path d="M10 9.5C10 15.0228 10 9.5 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C10 5.5 10 3.97715 10 9.5Z" fill={color}/>
  </svg>
);

const HamburgerIconSvg = ({ color = "#F9EFDA" }) => (
  <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line y1="1.5" x2="20" y2="1.5" stroke={color} stroke-width="3"/>
    <line y1="8.5" x2="20" y2="8.5" stroke={color} stroke-width="3"/>
    <line y1="15.5" x2="20" y2="15.5" stroke={color} stroke-width="3"/>
  </svg>
);

