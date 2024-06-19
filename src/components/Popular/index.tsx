import React, { FC } from 'react';
import classes from './classes.module.css';
import { Blog } from '@/content';
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
          // eslint-disable-next-line no-underscore-dangle
          key={post._id}
          post={post}
        />
      ))}
    </ul>
  </aside>
);

export default Popular;
