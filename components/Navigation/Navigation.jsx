import React from 'react';
import Link from 'next/link';
import classes from '../../styles/navigation.module.css';

const Navigation = () => {
    return (
        <div className={classes.navigation}>
            <ul className={classes.nav_list}>
                <li className={classes.nav_item}>
                    <Link href="/">
                        <a>главная</a>
                    </Link>
                </li>
                <li className={classes.nav_item}>
                    <Link href="/blog">
                        <a>почитать</a>
                    </Link>
                </li>
                <li className={classes.nav_item}>
                    <Link href="/watch">
                        <a>посмотреть</a>
                    </Link>
                </li>
                <li className={classes.nav_item}>
                    <Link href="/contacts">
                        <a>эбаут</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
};

export default Navigation
