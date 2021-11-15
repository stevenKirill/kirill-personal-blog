import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import { Post } from '../../components/Post/Post';
import styles from '../../styles/post.module.css';

// TODO написать мета теги для каждой html страницы
const Blog = ({ posts }) => {
    return (
        <>
        <Head>
            <title>Статьи Кирилла Павловского</title>
            <meta></meta>
        </Head>
        <div className={styles.posts}>
            {posts.map((post) => {
                return (
                    <Post post={post} key={post.slug}/>
                )
            })}
        </div>
        </>
    )
};

export const getStaticProps = async () => {
    const files = fs.readdirSync(path.join('posts'));
    const posts = files.map(fileName => {
      const slug = fileName.replace('.md','');
      const meta = fs.readFileSync(path.join('posts',fileName),'utf-8');
      const { data: frontmatter } = matter(meta);
      return {
        slug,
        frontmatter
      }
    });
    return {
      props: {
        posts: posts
      }
    }
  }

export default Blog
