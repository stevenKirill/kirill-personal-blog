import React from 'react';
import Link from 'next/link';
import classes from '../../styles/navigation.module.css';

const Navigation = () => {
    return (
        <div className={classes.navigation}>
            <ul className={classes.nav_list}>
                <li className={classes.nav_item}>
                    <Link href="/">
                        <a>Главная</a>
                    </Link>
                </li>
                <li className={classes.nav_item}>
                    <Link href="/blog">
                        <a>Блог</a>
                    </Link>
                </li>
                <li className={classes.nav_item}>
                    <Link href="/contacts">
                        <a>Контакты</a>
                    </Link>
                </li>
                <li className={classes.nav_item}>
                    <Link href="/other">
                        <a>Другое</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
};

export default Navigation
