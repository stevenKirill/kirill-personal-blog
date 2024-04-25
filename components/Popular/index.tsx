import React, { FC } from 'react';
import classes from './classes.module.css';

const Popular: FC = () => {
  return (
    <aside className={classes.container}>
      <h2 className={classes.title}>Популярные</h2>
    </aside>
  );
};

export default Popular
