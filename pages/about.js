import ActionButtons from '../components/ActionButtons';
import Header from '../components/header';
import styles from '../styles/About.module.css';

export default function About(props){

  return(
    <>
    <Header onlyHamburger={true}/>
    <div className={styles.background}/>
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <div className={styles.title}>About</div>
        <InfoText text={"By the Fire is a collection of short stories. It was written and built by Jake Roseman.\nThe writing provides something rare today - short fiction that focuses on the actions of a protagonist who struggles against something real.\nThe website makes the writing readily available without a paywall. It provides a reading experience that is both beautiful and engaging.\nFeel free to email roseman.jake@gmail.com, or follow @jake_roseman"}/>
        <div className={styles.buttonContainer}>
          <ActionButtons light={true} fullWidth={true}/>
        </div>
        <CornicePromo/>
      </div>
    </div>
    </>
  )
}

function CornicePromo(){
  return(
    <div className={styles.corniceContainer}>
      <InfoText text={"If you enjoyed By the Fire, be sure to check out the stories at Cornice: cornicemag.com."}/>
    </div>
  )
}

function InfoText(props){
  return(
    <div className={styles.textContainer}>
      {props.text.split("\n").map((para, i) => {
          return <InfoPara text={para} key={`para-${i}`}/>
        })}
    </div>
  )
}

function InfoPara(props){
  return(
    <div className={styles.para}>{props.text}</div>
  )
}