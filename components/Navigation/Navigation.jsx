import React, { useRef } from 'react';
import Link from 'next/link';
import { menuItems } from './menuItems';
import classes from '@/styles/navigation.module.css';

const Navigation = () => {
    const hamburgerRef = useRef(null);
    const menuRef = useRef(null);

    /** открыть меню на мобилке */
    const handleOpenMobileMenu = () => {
        hamburgerRef.current.classList.toggle(`${classes.active}`);
        menuRef.current.classList.toggle(`${classes.active}`);
    };

    /** закрыть мобильное меню */
    const handleCloseMenu = () => {
        if (window.getComputedStyle(hamburgerRef.current, null).display === 'block') {
            hamburgerRef.current.classList.remove(`${classes.active}`);
            menuRef.current.classList.remove(`${classes.active}`);
        };
    };

    return (
        <nav className={classes.navigation}>
            <ul className={classes.nav_list} ref={menuRef}>
                {menuItems.map(link => {
                    return (
                        <li 
                            className={classes.nav_item}
                            key={`${link.title}_${link.path}`}
                            onClick={handleCloseMenu}
                        >
                            <Link href={`${link.path}`}>
                                <a>{link.title}</a>
                            </Link>
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

export default Navigation
