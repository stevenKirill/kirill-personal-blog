import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "../Navigation";
import styles from "../../styles/header.module.css";

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.link_wrapper}>
          <Link href="/">
            <div className={styles.header_link}>
              <Image
                src="/images/other/logo.jpg"
                width={60}
                height={60}
                alt="logo"
                className={styles.header_link_image}
              />
            </div>
          </Link>
          <h2>kirill pavlovskii</h2>
        </div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
