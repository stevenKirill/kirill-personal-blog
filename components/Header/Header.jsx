import React from 'react';
import Link from 'next/link';
import Navigation from '../Navigation/Navigation';
import styles from '../../styles/header.module.css';

export const Header = () => {
    return (
        <header className={styles.wrapper}>
            <div className={styles.header}>
                <Link href="/">
                    <a className={styles.header_link}>
                        <h2>kirill pavlovskii</h2>
                    </a>
                </Link>
                <Navigation/>
            </div>
        </header>
    )
}
