import Image from 'next/image';
import Link from 'next/link';
import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <Link href="/" className={styles.logoContainer}>
      <Image src="/camera.png" fill={true} alt="logo" className={styles.logo} />
    </Link>
  );
};

export default Logo;
