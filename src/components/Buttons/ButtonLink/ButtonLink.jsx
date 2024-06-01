import Link from 'next/link';
import styles from './ButtonLink.module.scss';

const ButtonLink = ({ href, title, customStyles }) => {
  return (
    <Link href={href} className={styles.button + ' ' + customStyles}>
      {title}
    </Link>
  );
};

export default ButtonLink;
