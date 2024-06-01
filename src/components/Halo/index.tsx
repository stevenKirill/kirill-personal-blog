'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cx } from '@/utils/utils';
import useMousePosition from '@/hooks/useMousePosition';
import classes from './classes.module.css';

type HaloProps = {
  children: ReactNode | ReactNode[];
  /** Width/height in px */
  size: number;
  /** How strong the effect should be (0-100) */
  strength: number;
  className: string;
};

export default function Halo({
  children,
  size = 600,
  strength = 10,
  className,
}: HaloProps) {
  const ref = React.useRef(null);
  const { x, y } = useMousePosition(ref);
  const offset = size / 2;

  // matching tailwind md breakpoint
  let isMobile = false;
  if (typeof window !== 'undefined') {
    isMobile = window.matchMedia('(max-width: 768px)').matches;
  }
  return (
    <motion.div
      ref={ref}
      className={cx(classes.container, className)}
      whileHover="hover"
    >
      <motion.div
        style={
          {
            '--x': `${x ? x - offset : -offset}px`,
            '--y': `${y ? y - offset : -offset}px`,
            width: size,
            height: size,
            background:
              'radial-gradient(#FFFFFF 0%, rgba(188, 255, 219, 0) 60%)',
          } as React.CSSProperties
        }
        className={classes.effect}
        variants={{
          hover: {
            opacity: isMobile ? 0 : strength / 100,
          },
        }}
      />
      {children}
    </motion.div>
  );
}
