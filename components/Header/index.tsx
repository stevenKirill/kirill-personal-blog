"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "../Navigation";
import styles from "../../styles/header.module.css";
import { useThemeSwitch } from "@/hooks/useTheme";
import { IoSunnySharp } from "react-icons/io5";
import { FiMoon } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
import classes from './header.module.css';

const Header = () => {
  const [mode, setMode] = useThemeSwitch();
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
        <div className={classes.rightContainer}>
          <Navigation />
          <div className={classes.icon} onClick={() => setMode(mode === "light" ? "dark" : "light")}>
            {mode === "light" ? (
              <IoSunnySharp className={classes.sun} size={24} />
            ) : (
              <FaMoon className={classes.moon} color="white" size={24} />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
