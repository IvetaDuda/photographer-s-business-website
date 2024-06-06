'use client';

import ButtonLink from '@/components/Buttons/ButtonLink/ButtonLink';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './AboutMePage.module.scss';

const AboutMePage = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className={styles.aboutMe}>
      <div className={`container ${styles.aboutMeContainer}`}>
        <h1 className={styles.title}>Про мене</h1>
        <div className={styles.aboutMeContent}>
          {!isSmallScreen && (
            <div className={styles.imgContainer}>
              <Image
                src="/hero/kato-blackmore-vMUAIcZhfoo-unsplash.webp"
                alt="фото камери"
                fill={true}
                className={styles.img}
              />
            </div>
          )}
          <ul className={styles.textList}>
            <li className={styles.text}>
              Привіт! Я <span className="accentText">Данієль Ширан</span>,
              професійний <span className="accentText">фотограф</span> з
              Ужгороду, спеціалізуюсь на портретній, весільній та пейзажній
              фотографії.
            </li>
            <li>
              {isSmallScreen && (
                <div className={styles.imgContainer}>
                  <Image
                    src="/hero/kato-blackmore-vMUAIcZhfoo-unsplash.webp"
                    alt="фото камери"
                    fill={true}
                    className={styles.img}
                  />
                </div>
              )}
            </li>
            <li className={styles.text}>
              <span className="accentText">Мій стиль фотографії</span> &ndash;
              це поєднання природності та емоційності. Я завжди намагаюся
              зловити справжні моменти, щоб кожне фото розповідало свою
              унікальну історію.
            </li>
            <li className={styles.text}>
              Зв&rsquo;яжіться зі мною для замовлення фотосесії або отримання
              додаткової інформації:{' '}
              <a href="tel:+380966058605" className={styles.active}>
                +38 (096) 605 86 05
              </a>{' '}
              або{' '}
              <a
                href="mailto:inbox.webevery@gmail.com"
                className={styles.active}
              >
                inbox.webevery@gmail.com
              </a>
            </li>
            <li className={styles.text}>
              <span className="accentText">Хочете побачити більше?</span>{' '}
              Пориньте у світ моєї фотографії та перегляньте моє{' '}
              <span className="accentText">портфоліо</span>. Відкрийте для себе
              красу моментів, які я маю честь зберігати.
            </li>
            <li className={styles.btn}>
              <ButtonLink href="/portfolio" title="Переглянути Портфоліо" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMePage;
