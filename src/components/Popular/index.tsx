import React, { FC } from 'react';
import classes from './classes.module.css';
import { Blog } from '@/.contentlayer/generated';
import Item from './Item';

interface IProps {
  popularPosts: Blog[];
}

const Popular: FC<IProps> = ({ popularPosts }) => (
  <aside className={classes.container}>
    <h2 className={classes.title}>Популярные</h2>
    <ul className={classes.postsWrapper}>
      {popularPosts.map((post) => (
        <Item
          key={post._id}
          post={post}
        />
      ))}
    </ul>
  </aside>
);

export default Popular;
