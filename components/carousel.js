import React, { useRef, useEffect, useState } from 'react';
import CarouselCard from './carousel-card';
import styles from '../styles/Carousel.module.css';

export default function Carousel(){
  const carouselRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
        const percentageScrolled = (carouselRef.current.scrollLeft / maxScroll) * 100;
        setScrollPosition(percentageScrolled);
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

  const cardData = [
    { id: 1, image: "/images/titles/goldrush.png", title: 'Gold Rush', subtitle: "A man prospects for gold in colonial Victoria.", time:"5 minute read"},
    { id: 2, image: "/images/titles/shotgun.png", title: 'Shotgun', subtitle: "A father avenges his son's death.", time:"5 minute read"},
    { id: 3, image: "/images/titles/thebear.png", title: 'The Bear', subtitle: "A young man goes trekking in the Wyoming backcountry.", time:"5 minute read"},
    { id: 4, image: "/images/titles/parasocial.png", title: 'Parasocial', subtitle: "A desperate fan is convinced that he has a connection with a famous filmmaker.", time:"5 minute read"},
    { id: 5, image: "/images/titles/hypochondria.png", title: 'Hypochondria', subtitle: "A young man is sure something is wrong with him.", time:"5 minute read"},
    { id: 6, image: "/images/titles/pigeons.png", title: 'Pigeons', subtitle: "A horde of pigeons settles on a London street.", time:"5 minute read"},
  ];

  return(
    <div className={styles.carousel} ref={carouselRef}>
    {cardData.map((item) => (
      <div key={item.id}>
        <CarouselCard data={item}/>
      </div>
    ))}
    <b style={{position:"fixed", bottom: 0}}>{scrollPosition}</b>
    </div>
  )
}