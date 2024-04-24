import React, { FC } from 'react';
import classes from './classes.module.css';
import Link from 'next/link';

interface IMainPageProps {
  title: string;
  excerpt: string;
  slug: string;
  firstText: string;
}

const MainPagePost: FC<IMainPageProps> = ({ title, excerpt, slug, firstText }) => {
  return (
    <div className={classes.cardWrapper}>
      <article className={classes.article}>
        <Link className={classes.link} href={`/blog/${slug}`}>
          <h3 className={classes.title}>{title}</h3>
          <h4 className={classes.excerpt}>{excerpt}</h4>
          <p className={classes.firstText}>{firstText}</p>
          <div className={classes.readMore}>
            <span>Читать далее</span>
          </div>
        </Link>
      </article>
    </div>

  );
};

export default MainPagePost
