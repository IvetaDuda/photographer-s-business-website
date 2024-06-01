'use client';

import { SiteContext } from '@/context/SiteContext';
import { navLinks } from '@/data/navLinks';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import BurgerBtn from '../Buttons/BurgerBtn/BurgerBtn';
import ButtonLink from '../Buttons/ButtonLink/ButtonLink';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import styles from './Header.module.scss';

const Header = () => {
  const { burgerMenu } = useContext(SiteContext);

  return (
    <header className={styles.header}>
      <div className={`${styles.heroContainer} container`}>
        <div className={styles.logoContainer}>
          <Image
            src="/camera.png"
            fill={true}
            alt="logo"
            className={styles.logo}
          />
        </div>
        <ul className={styles.headerLinks}>
          {navLinks.map(({ id, title, href }) => (
            <li className={styles.link} key={id}>
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
        {burgerMenu && <BurgerMenu />}
      </div>
    </header>
  );
};

export default Header;
