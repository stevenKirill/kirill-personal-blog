'use client';

import React, { useCallback, useRef } from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import classes from './classes.module.css';
import { Blog } from '@/content';

interface IProps {
  post: Blog;
}

const Item = ({ post }: IProps) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const linkRef = useRef<HTMLAnchorElement | null>(null);
  const handleEnter = useCallback(() => {
    if (ref.current) {
      ref.current.style.transform = 'translateX(8px)';
    }
  }, []);

  const handleLeave = useCallback(() => {
    if (ref.current) {
      ref.current.style.transform = 'translateX(0px)';
    }
  }, []);

  return (
    // eslint-disable-next-line no-underscore-dangle
    <li key={post._id} className={classes.item}>
      <span className={classes.icon} ref={ref}>
        <FaArrowRight color="#617bff" size={16} />
      </span>
      <Link
        ref={linkRef}
        href={`/blog/${post.slug}`}
        className={classes.post}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        {post.title}
      </Link>
    </li>
  );
};

export default Item;
