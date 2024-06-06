'use client';

import { SiteContext } from '@/context/SiteContext';
import { navLinks } from '@/data/navLinks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';
import BurgerBtn from '../Buttons/BurgerBtn/BurgerBtn';
import ButtonLink from '../Buttons/ButtonLink/ButtonLink';
import Logo from '../Buttons/Logo/Logo';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import styles from './Header.module.scss';

const Header = () => {
  const pathName = usePathname();

  return (
    <header className={styles.header}>
      <div className={`${styles.heroContainer} container`}>
        <Logo />
        <ul className={styles.headerLinks}>
          {navLinks.map(({ id, title, href }) => (
            <li
              className={
                pathName === href
                  ? styles.link + ' ' + styles.active
                  : styles.link
              }
              key={id}
            >
              <Link href={href}>{title}</Link>
            </li>
          ))}
        </ul>
        <ButtonLink
          title="Зв'язатися Зі Мною"
          href="/contacts"
          customStyles={styles.btn}
        />
        <BurgerBtn />
        <BurgerMenu />
      </div>
    </header>
  );
};

export default Header;
