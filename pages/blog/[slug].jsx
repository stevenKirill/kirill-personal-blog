import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import styles from '@/styles/post.module.css';
import Link from 'next/link';
import { getFiles } from '@/utils/getters';
import { useEffect, useState } from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  VKShareButton,
  TelegramShareButton
} from "react-share";
import {
  FacebookIcon,
  TwitterIcon,
  VKIcon,
  TelegramIcon
} from "react-share";

const PostPage = ({
    frontmatter: { title, date, category, cover_image },
    slug,
    content,
    pageName,
  }) => {
    const [url,setUrl] = useState('');
    useEffect(() => {
      setUrl(window.location.href);
    },[]);
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
            <div className={styles.shareIcons}>
              <FacebookShareButton
                url={"https://peing.net/ja/"}
                quote={title}
                description={slug}
              >
                <FacebookIcon size={32} round/>
              </FacebookShareButton>
              <VKShareButton
                  url={url}
                  quote={title}
                  description={slug}
                  className='margin-left-5'
                >
                  <VKIcon size={32} round/>
              </VKShareButton>
              <TelegramShareButton
                  url={url}
                  quote={title}
                  description={slug}
                  className='margin-left-5'
                >
                  <TelegramIcon size={32} round/>
              </TelegramShareButton>
              <TwitterShareButton
                  url={url}
                  quote={title}
                  description={slug}
                  className='margin-left-5'
                >
                  <TwitterIcon size={32} round/>
              </TwitterShareButton>
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
      pageName: 'BLOG_PAGE',
    },
  }
}

export default PostPage;