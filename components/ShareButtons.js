import React, { useState } from 'react';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';
import styles from '../styles/ShareButtons.module.css';

const ShareButtons = ({ url, title, fullWidth = false, light = false }) => {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${title}&url=${url}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
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
    setColor(light ? "#F9EFDA" : "#343434");
  };

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <IconComponent size={size} color={color} />
    </a>
  );
};


export default ShareButtons;