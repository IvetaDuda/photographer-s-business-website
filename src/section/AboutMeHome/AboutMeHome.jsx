import Link from 'next/link';
import ButtonLink from '../../components/Buttons/ButtonLink/ButtonLink';
import styles from './AboutMeHome.module.scss';

const AboutMeHome = () => {
  return (
    <section>
      <div className={`container ${styles.aboutMeContainer}`}>
        <ul className={styles.textList}>
          <li className={styles.text}>
            Привіт! Я <span className="accentText">Данієль Ширан</span>,
            професійний <span className="accentText">фотограф</span>.
          </li>
          <li className={styles.text}>
            Моя пристрасть &ndash; захоплювати найцінніші моменти та
            перетворювати їх у вічні спогади. Спеціалізуюсь на портретній,
            весільній та пейзажній фотографії, прагнучи передати красу та емоції
            кожного кадру.
          </li>
          <li className={styles.text}>
            Дякую, що завітали на мій сайт. Запрошую переглянути моє{' '}
            <Link href="/portfolio" className="accentText">
              портфоліо
            </Link>{' '}
            та{' '}
            <Link href="/contacts" className="accentText">
              зв&rsquo;язатися зі мною
            </Link>{' '}
            для обговорення ваших побажань.
          </li>
          <li>
            <ButtonLink title="Більше про мене" href="/aboutMe" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutMeHome;
