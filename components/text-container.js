import React, {useState, useEffect} from 'react'
import styles from '../styles/TextContainer.module.css';
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import BasicImage from './basic-image';

export default function TextContainer(props){
  const [paras, setParas] = useState([])

  useEffect(() => {
    setParas(props.text.split("\n").filter(para => !para.match(/^\s*$/)))
  },[])

  return(
    <>
    {paras.map((para, i) => (
      (para.match(/^\!\[\]\(.+\)$/))
      ? <BasicImage image={para.match(/(?<=^\!\[\]\().+(?=\)$)/)[0]}/>
      : (para.match(/^~~~$/))
      ? <Divider/>
      : <Text key={`para-${props.containerIndex}-${i}`} content={para}/>
    ))}
    </>
  )
}

function Text(props){

  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    threshold: 0.3,  // change this value to determine how much of the element needs to be in view
    rootMargin: '20px 0px',
  })

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { x: "10%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return(
    <motion.div 
      ref={ref} 
      className={styles.text}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{
        duration: 0.45,
        ease: 'easeOut',
      }}>
      {props.content}</motion.div>
  )
}

function Divider(){
  return(
    <div className={styles.divider}>
      <div className={styles.dividerLine}/>
      <div className={styles.dividerCircle}/>
    </div>
  )
}