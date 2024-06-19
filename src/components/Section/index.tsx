import { ReactNode } from 'react';
import classes from './classes.module.css';

interface SectionProps {
  heading: string;
  children: ReactNode;
}

export default function Section({
  heading,
  children,
}: SectionProps) {
  return (
    <section className={classes.item}>
      <h2
        className={classes.heading}
      >
        {heading}
      </h2>
      {children}
    </section>
  );
}
