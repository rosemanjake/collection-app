import '../styles/globals.css';
import React from 'react';
import { DarkModeProvider } from '../context/DarkModeProvider';

export default function MyApp({ Component, pageProps }) {
  return (
    <DarkModeProvider>
      <Component {...pageProps} />
    </DarkModeProvider>
  );
}