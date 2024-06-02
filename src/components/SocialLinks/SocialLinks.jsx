import { socialLinks } from '@/data/socialLinks';
import styles from './SocialLinks.module.scss';

const SocialLinks = ({ socialList }) => {
  return (
    <ul className={socialList}>
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
  );
};

export default SocialLinks;
