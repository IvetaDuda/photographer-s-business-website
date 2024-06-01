import Image from 'next/image';
import ButtonLink from '../Buttons/ButtonLink/ButtonLink';
import styles from './AboutMeHome.module.scss';

const AboutMeHome = () => {
  return (
    <section>
      <div className={`container ${styles.aboutMeContainer}`}>
        <div className={styles.imgContainer}>
          <Image
            src="/shivam-baraik-PxA4NdjL5Rw-unsplash.webp"
            fill={true}
            alt="camera"
            className={styles.img}
          />
        </div>
        <ul className={styles.textList}>
          <li className={styles.text}>
            Привіт! Я Данієль Ширан, професійний фотограф.
          </li>
          <li className={styles.text}>
            Моя пристрасть – захоплювати найцінніші моменти та перетворювати їх
            у вічні спогади. Спеціалізуюсь на портретній, весільній та пейзажній
            фотографії, прагнучи передати красу та емоції кожного кадру.
          </li>
          <li className={styles.text}>
            Дякую, що завітали на мій сайт. Запрошую переглянути моє портфоліо
            та зв'язатися зі мною для обговорення ваших побажань.
          </li>
          <li className={styles.text}>
            <ButtonLink title="Переглянути Портфоліо" href="/portfolio" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutMeHome;
