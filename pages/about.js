import Header from '../components/header';
import Info from '../components/info';
import InfoText from '../components/info-text';


export default function About(props){

  return(
    <>
    <Header/>
    <Info>
      <InfoText text={"By the Fire is a collection of short stories.\nJake Roseman wrote the text and built the website."}/>
    </Info>
    </>
  )
}