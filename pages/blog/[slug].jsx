import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import styles from '@/styles/post.module.css';
import Link from 'next/link';
import { getFiles } from '@/utils/getters';

const PostPage = ({
    frontmatter: { title, date, category, cover_image },
    slug,
    content,
  }) => {
    return (
        <div className={styles.container}>
          <Link href='/blog'>
            <a className={styles.post_back}>
            <button className={styles.back_button} role="button">Назад</button>
            </a>
          </Link>
          <div className={styles.card}>
            <h1 className={styles.post_title}>{title}</h1>
            <div className={styles.post_date}>Опубликовано: {date}</div>
            <div className={styles.post_category}>{category}</div>
            <div className={styles.post_image_big}>
              <img src={cover_image} alt={styles.post_title}/>
            </div>
            <div className={styles.post_body}>
              <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
            </div>
          </div>
        </div>
      )
};

export const getStaticPaths = async () => {
  const files = getFiles();
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }));
  
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params: { slug }}) => {
  const markdownPost = fs.readFileSync(path.join('posts', slug + '.md'),'utf-8');
  const { data: frontmatter, content } = matter(markdownPost);
  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  }
}

export default PostPage;