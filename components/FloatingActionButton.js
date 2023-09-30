import { FaShoppingCart } from 'react-icons/fa'; // or any other icon from 'react-icons/fa'
import styles from '../styles/FloatingActionButton.module.css';
import openAmazonLink from '../utils';

const FloatingActionButton = ({ onClick, IconComponent }) => {
  return (
    <button className={styles.fab} onClick={onClick}>
      <FaShoppingCart onClick={()=>{openAmazonLink()}}/>
    </button>
  );
};

export default FloatingActionButton;