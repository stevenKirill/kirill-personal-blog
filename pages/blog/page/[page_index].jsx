import React, { useState, useEffect } from 'react';
import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import matter from 'gray-matter';
import styles from '../../../styles/post.module.css';
import { Post } from '../../../components/Post/Post';
import { POSTS_PER_PAGE } from '../../../consts/consts';
import { Pagination } from '../../../components/Pagination/Pagination';

const BlogPage = ({ posts, currentPage, numPages }) => {
  console.log(currentPage)
  console.log(numPages)
    return (
        <>
          <Head>
            <title>Статьи Кирилла Павловского</title>
            <meta name="keywords" content="блог,Кирилл,Павловский,программирование,психология,спорт,питание"/>
            <meta name="description" content="блог о программировании,психологии,спорте и других интересных темах."/>
          </Head>
          <div className={styles.posts}>
              {posts.map((post) => {
                  return <Post post={post} key={post.slug}/>
              })}
          </div>
          <Pagination/>
        </>
    )
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'));
  const numberOfPages = Math.ceil(files.length / POSTS_PER_PAGE);

  let paths = [];
  console.log('getstatucpatdddh')
  for (let i = 1; i <= numberOfPages; i++) {
    paths.push({
      params: {
        page_index: i.toString()
      }
    })
  }
  console.log(paths,'=> path')
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
    const page = parseInt(params && params.page_index) || 1;
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

    const numberOfPages = Math.ceil(files.length / POSTS_PER_PAGE);
    const pageIndex = page - 1;
    const orderedPosts = posts.slice(page * POSTS_PER_PAGE,(pageIndex + 1) * POSTS_PER_PAGE);

    return {
      props: {
        posts: orderedPosts,
        numPages: numberOfPages,
        currentPage: page,
      }
    }
  }

export default BlogPage
