import React, { FC } from 'react';
import classes from './classes.module.css';
import Link from 'next/link';

interface IMainPageProps {
  title: string;
  excerpt: string;
  slug: string;
}

const MainPagePost: FC<IMainPageProps> = ({ title, excerpt, slug }) => {
  return (
    <div className={classes.cardWrapper}>
      <article className={classes.article}>
        <Link href={`/blog/${slug}`}>
          <h3>{title}</h3>
          <h4>{excerpt}</h4>
          <p></p>
          <div>Читать далее</div>
        </Link>
      </article>
    </div>

  );
};

export default MainPagePost
