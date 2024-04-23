import React, { FC } from 'react';
import classes from './classes.module.css';
import Link from 'next/link';

interface IMainPageProps {
  title: string;
  excerpt: string;
}

const MainPagePost: FC<IMainPageProps> = ({ title, excerpt }) => {
  return (
    <article className={classes.cardWrapper}>
      <Link>
        <h3>{title}</h3>
        <h4>{excerpt}</h4>
        <p></p>
        <div>Читать далее</div>
      </Link>
    </article>
  );
};

export default MainPagePost
