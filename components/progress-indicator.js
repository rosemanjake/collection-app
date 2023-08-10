import { useEffect, useState } from 'react';
import styles from '../styles/ProgressIndicator.module.css';

const ProgressIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const throttle = (func, wait) => {
    let timer = null;
    return (...args) => {
      if (timer === null) {
        timer = setTimeout(() => {
          func(...args);
          timer = null;
        }, wait);
      }
    };
  };

  const handleScrolling = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight - 200 // subtract 200 for the header
    const progress = (scrollTop / scrollHeight) * 100;

    setScrollProgress(progress > 100 ? 100 : progress);
  };

  const throttledHandleScrolling = throttle(handleScrolling, 150); // 100ms delay

  useEffect(() => {
    throttledHandleScrolling();
    window.addEventListener('scroll', throttledHandleScrolling);

    return () => {
      window.removeEventListener('scroll', throttledHandleScrolling);
    };
  }, []);

  function interpolateColor(color1, color2, ratio) {
    let r = Math.round(color1[0] + (color2[0] - color1[0]) * ratio);
    let g = Math.round(color1[1] + (color2[1] - color1[1]) * ratio);
    let b = Math.round(color1[2] + (color2[2] - color1[2]) * ratio);
    return `rgb(${r},${g},${b})`;
  }

  const bgColor = interpolateColor([52,52,52], [249,53,11], scrollProgress / 100);

  return (
    <div className={styles.bar} style={{ position: "fixed", bottom: 0, width: `${scrollProgress}%`, backgroundColor: bgColor }}></div>
  );
};

export default ProgressIndicator;