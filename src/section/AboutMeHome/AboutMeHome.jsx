import ButtonLink from '../../components/Buttons/ButtonLink/ButtonLink';
import styles from './AboutMeHome.module.scss';

const AboutMeHome = () => {
  return (
    <section>
      <div className={`container ${styles.aboutMeContainer}`}>
        <ul className={styles.textList}>
          <li className={styles.text}>
            Привіт! Я Данієль Ширан, професійний фотограф.
          </li>
          <li className={styles.text}>
            Моя пристрасть &ndash; захоплювати найцінніші моменти та
            перетворювати їх у вічні спогади. Спеціалізуюсь на портретній,
            весільній та пейзажній фотографії, прагнучи передати красу та емоції
            кожного кадру.
          </li>
          <li className={styles.text}>
            Дякую, що завітали на мій сайт. Запрошую переглянути моє портфоліо
            та зв&rsquo;язатися зі мною для обговорення ваших побажань.
          </li>
          <li>
            <ButtonLink title="Більше про мене" href="/aboutUs" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutMeHome;
