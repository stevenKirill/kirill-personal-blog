import React from 'react';
import Link from 'next/link';
import styles from '../../styles/post.module.css';
import { getCategoryColor } from '../../utils/utils';

export const Post = ({ post }) => {
    const { frontmatter: { title, category, cover_image, date } } = post
    const { text, color } = getCategoryColor(category);
    return (
        <div className={styles.card}>
            <div className={styles.post_title}>{title}</div>
            <div className={`${styles.post_category} ${styles[color]}`}>{text}</div>
            <img src={cover_image} alt={title}/>
            <div className={styles.post_date}>{date}</div>
        </div>
    )
};
