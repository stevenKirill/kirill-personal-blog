import React from 'react';
import Link from 'next/link';
import styles from '../../styles/post.module.css';
import { getCategoryColor } from '../../utils/utils';
import { FaReadme } from 'react-icons/fa';

export const Post = ({ post }) => {
    const { frontmatter: { title, category, cover_image, date, excerpt }, slug } = post
    const { text, color } = getCategoryColor(category);
    return (
        <div className={styles.card}>
            <div className={`${styles.post_category} ${color}`}>{text}</div>
            <div className={styles.post_title}>{title}</div>
            <div className={styles.post_image}>
                <img src={cover_image} alt={title}/>
            </div>
            <div className={styles.post_date}>{date}</div>
            <div className={styles.post_excerpt}>{excerpt}...</div>
            <Link href={`/blog/${slug}`}>
                <a className={styles.post_read_more}>
                    <FaReadme size="1.2rem"/>
                    <span>Читать далее</span>
                </a>
            </Link>
        </div>
    )
};
