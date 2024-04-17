import React from "react";
import Link from "next/link";
import { FaReadme } from "react-icons/fa";
import styles from "../../styles/post.module.css";
import { getCategoryItem, MONTHS } from "../../utils/utils";

export const Post = ({ post, compact }) => {
  const { title, category, cover_image, date, excerpt, slug } = post;
  const postDate = new Date(date);
  const { text, color } = getCategoryItem(category);
  return (
    <div className={styles.card}>
      <div
        className={`${styles.post_category} ${color}`}
        style={{ fontSize: `${compact ? "16px" : ""}` }}
      >
        {text}
      </div>
      <div
        className={styles.post_title}
        style={{ fontSize: `${compact ? "15px" : ""}` }}
      >
        {title}
      </div>
      {!compact && (
        <div className={styles.post_image}>
          <img src={cover_image} alt={title} />
        </div>
      )}
      <div
        className={styles.post_date}
        style={{ fontSize: `${compact ? "14px" : ""}` }}
      >
        {`${
          MONTHS[postDate.getMonth()]
        } ${postDate.getDate()}, ${postDate.getFullYear()}`}
      </div>
      <div className={styles.post_excerpt}>{excerpt}...</div>
      <Link href={`/blog/${slug}`}>
        <div className={styles.post_read_more}>
          <FaReadme size="1.2rem" />
          <span style={{ fontSize: `${compact ? "14px" : ""}` }}>
            Читать далее
          </span>
        </div>
      </Link>
    </div>
  );
};
