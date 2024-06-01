import Link from 'next/link';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <ul className={styles.headerLinks}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/aboutUs">About Us</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/contacts">Contacts</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
