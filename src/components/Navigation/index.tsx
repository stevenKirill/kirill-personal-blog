/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { menuItems } from './menuItems';
import classes from './navigation.module.css';

const mediaQuery = '(max-width: 768px)';

let mediaQueryList: MediaQueryList;
if (typeof window !== 'undefined') {
  mediaQueryList = window.matchMedia(mediaQuery);
}

const Navigation = () => {
  const hamburgerRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLUListElement | null>(null);

  const handleMatch = (event: MediaQueryListEvent) => {
    if (!event.matches) {
      if (hamburgerRef.current && menuRef.current) {
        hamburgerRef.current.classList.remove(`${classes.active}`);
        menuRef.current.classList.remove(`${classes.active}`);
      }
    }
  };

  useEffect(() => {
    mediaQueryList.addEventListener('change', handleMatch);
    return () => {
      mediaQueryList.removeEventListener('change', handleMatch);
    };
  }, []);

  const handleOpenMobileMenu = () => {
    if (hamburgerRef.current && menuRef.current) {
      hamburgerRef.current.classList.toggle(`${classes.active}`);
      menuRef.current.classList.toggle(`${classes.active}`);
    }
  };

  const handleCloseMenu = () => {
    if (hamburgerRef.current && menuRef.current) {
      if (window.getComputedStyle(hamburgerRef.current, null).display === 'block') {
        hamburgerRef.current.classList.remove(`${classes.active}`);
        menuRef.current.classList.remove(`${classes.active}`);
      }
    }
  };

  return (
    <nav>
      <ul className={classes.nav_list} ref={menuRef}>
        {menuItems.map((link) => (
          <li
            className={classes.nav_item}
            key={`${link.title}_${link.path}`}
            onClick={handleCloseMenu}
          >
            <Link href={`${link.path}`}>{link.title}</Link>
          </li>
        ))}
      </ul>
      <div
        className={classes.hamburger}
        ref={hamburgerRef}
        onClick={handleOpenMobileMenu}
      >
        <span className={classes.bar} />
        <span className={classes.bar} />
        <span className={classes.bar} />
      </div>
    </nav>
  );
};

export default Navigation;
