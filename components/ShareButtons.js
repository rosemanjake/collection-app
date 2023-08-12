import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

const ShareButtons = ({ url, title, fullWidth = false, definedWidth = '250px' }) => {
  // Construct the Twitter URL
  const twitterUrl = `https://twitter.com/intent/tweet?text=${title}&url=${url}`;

  // Construct the Facebook URL
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;

  // Instagram does not provide a direct sharing URL, but you can link to your profile or replace this with another platform
  const instagramUrl = `https://www.instagram.com`;

  // Set the outer container style
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginTop: '3em'
  };

  // Set the inner div style
  const innerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: fullWidth ? '100%' : definedWidth
  };

  return (
    <div style={containerStyle}>
      <div style={innerStyle}>
        <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
          <FaTwitter size="24" color="#343434" />
        </a>
        <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
          <FaInstagram size="24" color="#343434" />
        </a>
        <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
          <FaFacebookF size="22" color="#343434" />
        </a>
      </div>
    </div>
  );
};

export default ShareButtons;