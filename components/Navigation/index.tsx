"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import { menuItems } from './menuItems';
import classes from './navigation.module.css';

const Navigation = () => {
  const hamburgerRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLUListElement | null>(null);

  /** открыть меню на мобилке */
  const handleOpenMobileMenu = () => {
    if (hamburgerRef.current && menuRef.current) {
      hamburgerRef.current.classList.toggle(`${classes.active}`);
      menuRef.current.classList.toggle(`${classes.active}`);
    }
  };

  /** закрыть мобильное меню */
  const handleCloseMenu = () => {
    if (hamburgerRef.current && menuRef.current) {
      if (window.getComputedStyle(hamburgerRef.current, null).display === 'block') {
        hamburgerRef.current.classList.remove(`${classes.active}`);
        menuRef.current.classList.remove(`${classes.active}`);
      };
    }
  };

  return (
    <nav>
      <ul className={classes.nav_list} ref={menuRef}>
        {menuItems.map(link => {
          return (
            <li
              className={classes.nav_item}
              key={`${link.title}_${link.path}`}
              onClick={handleCloseMenu}
            >
              <Link href={`${link.path}`}>{link.title}</Link>
            </li>
          )
        })}
      </ul>
      <div
        className={classes.hamburger}
        ref={hamburgerRef}
        onClick={handleOpenMobileMenu}
      >
        <span className={classes.bar}></span>
        <span className={classes.bar}></span>
        <span className={classes.bar}></span>
      </div>
    </nav>
  )
};

export default Navigation;