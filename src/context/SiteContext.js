'use client';
import React, { useState, createContext } from 'react';

export const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  const [burgerMenu, setBurgerMenu] = useState(false);

  const openModal = () => {
    setBurgerMenu((prevState) => !prevState);
  };

  return (
    <SiteContext.Provider
      value={{
        burgerMenu,
        setBurgerMenu,
        openModal,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};
