import React, { useState, useEffect } from 'react';
import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import matter from 'gray-matter';
import { Post } from '../../components/Post/Post';
import styles from '../../styles/post.module.css';
import { Pagination } from '../../components/Pagination/Pagination';

const Blog = ({ posts }) => {
  const [allPosts,setAllPosts] = useState(posts);

  useEffect(() => {
    console.log('effetс')
  }, []);

    return (
        <>
          <Head>
            <title>Статьи Кирилла Павловского</title>
            <meta name="keywords" content="блог,Кирилл,Павловский,программирование,психология,спорт,питание"/>
            <meta name="description" content="блог о программировании,психологии,спорте и других интересных темах."/>
          </Head>
          <div className={styles.posts}>
              {allPosts.map((post) => {
                  return (
                      <Post post={post} key={post.slug}/>
                  )
              })}
          </div>
          <Pagination/>
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
