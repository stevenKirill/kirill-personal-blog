import React, { FC } from 'react';
import classes from './classes.module.css';
import { Blog } from '@/.contentlayer/generated';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

interface IProps {
  popularPosts: Blog[];
}

const Popular: FC<IProps> = ({ popularPosts }) => (
  <aside className={classes.container}>
    <h2 className={classes.title}>Популярные</h2>
    <ul className={classes.postsWrapper}>
      {popularPosts.map((post) => (
        <Link
          href={`/blog/${post.slug}`}
          className={classes.post}
          key={post._id}>
            <span className={classes.icon}>
              <FaArrowRight color="#617bff" size={16} />
            </span>
            <li className={classes.postText}>{post.title}</li>
        </Link>
      ))}
    </ul>
  </aside>
);

export default Popular;
