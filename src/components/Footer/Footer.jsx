import { socialLinks } from '@/data/socialLinks';
import Logo from '../Buttons/Logo/Logo';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <Logo />
        <div className={styles.footerContact}>
          <ul className={styles.contactList}>
            <li>
              {/* <svg className={styles.contactIcon}>
                <use href="sprite.svg#icon-phone" />
              </svg> */}
              <a href="tel:+380966058605" className={styles.contactLink}>
                <p>+38 (096) 605 86 05</p>
              </a>
            </li>
            <li>
              {/* <svg className={styles.contactIcon}>
                <use href="sprite.svg#icon-mail" />
              </svg> */}
              <a
                href="mailto:inbox.webevery@gmail.com"
                className={styles.contactLink}
              >
                <p>inbox.webevery@gmail.com</p>
              </a>
            </li>
          </ul>
          <ul className={styles.socialList}>
            {socialLinks.map(({ id, title, href }) => (
              <li className={styles.socialItem} key={id}>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <svg className={styles.socialIcon}>
                    <use href={`sprite.svg#${href}`} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className={styles.copy}>© 2024 Данієль Ширан. Усі права захищено.</p>
      </div>
    </footer>
  );
};

export default Footer;
