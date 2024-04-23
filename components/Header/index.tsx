"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "../Navigation";
import { useThemeSwitch } from "@/hooks/useTheme";
import { IoSunnySharp } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import classes from './header.module.css';

const Header = () => {
  const [mode, setMode] = useThemeSwitch();
  return (
    <header className={classes.wrapper}>
      <div className={classes.header}>
        <div className={classes.link_wrapper}>
          <Link href="/">
            <div className={classes.header_link}>
              <Image
                src="/images/other/logo.jpg"
                width={60}
                height={60}
                alt="logo"
                className={classes.header_link_image}
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
