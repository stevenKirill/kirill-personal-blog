import React from 'react';
import classes from './classes.module.css';

const Mark = ({ text }: { text: string }) => (
  <div className={classes.markWrapper}>
    <div className={classes.mark}>
      <div className={classes.tipContainer}>
        <span className={classes.emoji} role="img" aria-label="light bulb">💡</span>
        <span className={classes.tip}>Совет</span>
      </div>
      <div className={classes.text}>{text}</div>
    </div>
  </div>
);

export default Mark;
