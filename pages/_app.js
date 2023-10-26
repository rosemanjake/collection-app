import '../styles/globals.css';
import React from 'react';
import { DarkModeProvider } from '../context/DarkModeProvider';
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'ontouchstart' in window) {
      document.body.classList.add('touch-device');
    }
  }, []);

  return (
    <DarkModeProvider>
      <Component {...pageProps} />
    </DarkModeProvider>
  );
}