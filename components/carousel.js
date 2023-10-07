import React, { useRef, useEffect, useState } from 'react';
import CarouselCard from './carousel-card';
import styles from '../styles/Carousel.module.css';
import ScrollOnHover from './ScrollOnHover';
import { AnimatePresence } from 'framer-motion';

export default function Carousel(props){
  const carouselRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
        const percentageScrolled = (carouselRef.current.scrollLeft / maxScroll) * 100;
        setScrollPosition(Math.ceil(percentageScrolled));
      }
    };

    if (carouselRef.current) {
      carouselRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (carouselRef.current) {
        carouselRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [carouselRef]);

  useEffect(() => {
    // Function to handle scrolling
    const handleScroll = (e) => {
      if (!carouselRef.current) return
      // Prevent the default scrolling behavior
      e.preventDefault();
      
      // Apply the scroll to the referenced div
      if(!props.isMobile){
        carouselRef.current.scrollLeft += e.deltaY;
      }

    };

    if(props.isMobile){
      return () => {
        window.removeEventListener('wheel', handleScroll, { passive: false });
      };
    }

    // Add the event listener to the window
    window.addEventListener('wheel', handleScroll, { passive: false });

    // Return a cleanup function to remove the event listener
    return () => {
      window.removeEventListener('wheel', handleScroll, { passive: false });
    };
  }, [props.isMobile]);

  const cardData = [
    { id: 1, image: "/images/titles/goldrush.jpg", title: 'Murphy\'s Run', subtitle: "A man prospects for gold in colonial Victoria.", time:"14 minute read", link: "/run"},
    { id: 2, image: "/images/titles/parasocial.jpg", title: 'Parasocial', subtitle: "A fan is convinced he has a connection with his idol.", time:"12 minute read", link: "/parasocial"},
    { id: 3, image: "/images/titles/thebear.jpg", title: 'The Bear', subtitle: "A young man treks through the Wyoming backcountry.", time:"7 minute read", link: "/the-bear"},
    { id: 4, image: "/images/titles/shotgun.jpg", title: 'Shotgun', subtitle: "A father avenges his son's death.", time:"6 minute read", link: "/shotgun"},
    { id: 5, image: "/images/titles/hypochondria.jpg", title: 'Salamander', subtitle: "A young man is sure something is wrong with him.", time:"6 minute read", link: "/salamander"},
    { id: 6, image: "/images/titles/twentyeuro.jpg", title: 'Twenty Euro', subtitle: "Scam artists hound a tourist in Paris.", time:"9 minute read", link: "/twenty-euro"},
    { id: 7, image: "/images/titles/pigeons.jpg", title: 'Pigeons', subtitle: "A horde of pigeons settles on a London street.", time:"9 minute read", link: "/pigeons"},
  ];

  return (
    <>
      <ScrollOnHover targetRef={carouselRef} reverse={false} visible={scrollPosition < 100} />
      <ScrollOnHover targetRef={carouselRef} reverse={true} visible={scrollPosition > 0} />
      <div className={styles.carouselContainer}>
        <div className={styles.carousel} ref={carouselRef}>
          {cardData.map((item) => (
            <CarouselCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </>
  );
}