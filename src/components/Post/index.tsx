/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import styles from '../../styles/post.module.css';
import { MONTHS } from '../../utils/utils';
import { IPost } from '@/types';

interface IPostProps {
  post: IPost
}

export const Post = ({ post }: IPostProps) => {
  const {
    title, date, first_text, slug,
  } = post;
  const postDate = new Date(date);
  return (
    <Link className={styles.card} href={`/blog/${slug}`}>
      <div className={styles.post_title}>
        {title}
      </div>
      <div
        className={styles.post_date}
      >
        {`${MONTHS[postDate.getMonth()]} ${postDate.getDate()}, ${postDate.getFullYear()}`}
      </div>
      <div className={styles.post_excerpt}>
        {first_text}
        ...
      </div>
      <div className={styles.post_read_more}>
        <span className={styles.readMore}>
          Читать далее
        </span>
        <FaArrowRight className={styles.icon} color="#617bff" />
      </div>
    </Link>
  );
};
