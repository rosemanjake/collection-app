import React, { useState, useEffect } from 'react';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';
import styles from '../styles/ShareButtons.module.css';
import { useRouter } from 'next/router';

const ShareButtons = ({ title, fullWidth = false, light = false }) => {
  const [fullURL, setFullURL] = useState('');

  useEffect(() => {
    setFullURL(window.location.href);
  }, []);

  const twitterUrl = `https://twitter.com/intent/tweet?text=Check%20it%20out!&url=${fullURL}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${fullURL}`;
  const instagramUrl = `https://www.instagram.com`;

  return (
    <div className={fullWidth ? styles.container : styles.narrowContainer}>
      <div className={styles.inner}>
        <ShareIcon IconComponent={FaTwitter} size="20" url={twitterUrl} light={light} />
        <ShareIcon IconComponent={FaInstagram} size="20" url={instagramUrl} light={light}/>
        <ShareIcon IconComponent={FaFacebookF} size="20" url={facebookUrl} light={light}/>
      </div>
    </div>
  );
};

const ShareIcon = ({ IconComponent, size, url, light }) => {
  const [color, setColor] = useState(light ? "#F9EFDA" : "#343434" );

  const handleMouseEnter = () => {
    setColor('#F9350B');
  };

  const handleMouseLeave = () => {
    resetColor()
  };

  const resetColor = ()=> {
    setColor(light ? "#F9EFDA" : "#343434");
  }

  useEffect(()=>{
    resetColor()
  },[light])

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <IconComponent size={size} color={color} />
    </a>
  );
};


export default ShareButtons;