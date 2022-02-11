import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaReadme } from 'react-icons/fa';
import styles from '../../styles/post.module.css';
import { getCategoryItem, MONTHS } from '../../utils/utils';

export const Post = ({ post, compact }) => {
    const { frontmatter: { title, category, cover_image, date, excerpt }, slug } = post
    const postDate = new Date(date);
    const { text, color } = getCategoryItem(category);
    return (
        <div className={styles.card}>
            <div 
                className={`${styles.post_category} ${color}`} 
                style={{ fontSize: `${compact ? '16px' : ''}`}}
            >
                {text}
            </div>
            <div 
                className={styles.post_title}
                style={{ fontSize: `${compact ? '15px' : ''}`}}
            >
                    {title}
            </div>
            {!compact && <div className={styles.post_image}>
                <Image src={cover_image} alt={title} width={250} height={250} className="post_body_img"/>
            </div>}
            <div 
                className={styles.post_date}
                style={{ fontSize: `${compact ? '14px' : ''}`}}
            >
                {`${MONTHS[postDate.getMonth()]} ${postDate.getDate()}, ${postDate.getFullYear()}`}
            </div>
            <div className={styles.post_excerpt}>{excerpt}...</div>
            <Link href={`/blog/${slug}`}>
                <a className={styles.post_read_more}>
                    <FaReadme size="1.2rem"/>
                    <span style={{ fontSize: `${compact ? '14px' : ''}`}}>Читать далее</span>
                </a>
            </Link>
        </div>
    )
};
