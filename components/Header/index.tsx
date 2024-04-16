import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "../Navigation";
import styles from "../../styles/header.module.css";

export const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.link_wrapper}>
          <Link href="/">
            <a className={styles.header_link}>
              <Image
                src="/images/other/logo.jpg"
                width={60}
                height={60}
                alt="logo"
                className={styles.header_link_image}
              />
            </a>
          </Link>
          <h2>kirill pavlovskii</h2>
        </div>
        <Navigation />
      </div>
    </header>
  );
};
