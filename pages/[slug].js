import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';
import styles from '../styles/post.module.css';

const PostPage = ({
    frontmatter: { title, date, cover_image },
    slug,
    content,
  }) => {
    return (
        <>
          <Link href='/'>
            <a className={styles.post_back}>Назад</a>
          </Link>
          <div className={styles.card}>
            <h1 className={styles.post_title}>{title}</h1>
            <div className={styles.post_date}>Опубликовано: {date}</div>
            <img src={cover_image} alt={styles.post_title}/>
            <div className={styles.post_body}>
              <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
            </div>
          </div>
        </>
      )
};

export const getStaticProps = async () => {
    return {}
}

export default PostPage;
