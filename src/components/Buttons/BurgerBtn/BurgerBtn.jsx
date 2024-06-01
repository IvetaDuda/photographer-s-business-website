'use client';

import { SiteContext } from '@/context/SiteContext';
import { useContext } from 'react';
import styles from './BurgerBtn.module.scss';

const BurgerBtn = () => {
  const { burgerMenu, openModal } = useContext(SiteContext);

  const burgerMenuChange = burgerMenu
    ? styles.burgerMenuOpen
    : styles.burgerMenu;

  return (
    <>
      <button
        className={burgerMenuChange}
        onClick={openModal}
        aria-label="Button burger menu"
        title="Burger Menu"
      >
        <span className={styles.burgerMenuBtnAfter}></span>
      </button>
    </>
  );
};

export default BurgerBtn;
