'use client';

import { heroImages } from '@/data/heroImages';
import { useEffect, useState } from 'react';
import ButtonLink from '../Buttons/ButtonLink/ButtonLink';
import styles from './Hero.module.scss';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    heroImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % heroImages.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        {heroImages.map((src, index) => (
          <div
            key={index}
            className={`${styles.heroImage} ${
              index === currentImage ? styles.active : ''
            }`}
            style={{ backgroundImage: `url(${src})` }}
          ></div>
        ))}
        <div className={`${styles.heroContent} container`}>
          <h1 className={styles.heroTitle}>Данієль Ширан</h1>
          <h2 className={styles.heroSubtitle}>Професійний Фотограф</h2>
          <p className={styles.heroDesc}>Фотографія, яка розповідає історії</p>

          <ButtonLink title="Переглянути Портфоліо" href="/portfolio" />

          <div className={styles.pagination}>
            {heroImages.map((_, index) => (
              <span
                key={index}
                className={`${styles.dot} ${
                  index === currentImage ? styles.activeDot : ''
                }`}
                onClick={() => setCurrentImage(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
