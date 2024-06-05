'use client';

import ButtonLink from '@/components/Buttons/ButtonLink/ButtonLink';
import { SiteContext } from '@/context/SiteContext';
import { navLinks } from '@/data/navLinks';
import Link from 'next/link';
import { useContext } from 'react';
import styles from './BurgerMenu.module.scss';

const BurgerMenu = () => {
  const { burgerMenu, setBurgerMenu } = useContext(SiteContext);

  const burgerMenuContainer = burgerMenu
    ? styles.burgerMenuContainerOpen + ' ' + styles.burgerMenuContainer
    : styles.burgerMenuContainerClose + ' ' + styles.burgerMenuContainer;

  return (
    <div className={burgerMenuContainer}>
      <ul className={styles.headerLinks}>
        {navLinks.map(({ id, title, href }) => (
          <li className={styles.link} key={id}>
            <Link href={href} onClick={() => setBurgerMenu(false)}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
      <ButtonLink
        title="Зв'язатися"
        href="/contacts"
        customStyles={styles.btn}
      />
    </div>
  );
};

export default BurgerMenu;
