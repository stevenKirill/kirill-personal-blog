import Head from 'next/head';
import styles from '@/styles/post.module.css';
import { Post } from '@/components/Post/Post';
import { POSTS_PER_PAGE } from '@/consts/consts';
import { Pagination } from '@/components/Pagination/Pagination';
import { getPosts, getFiles } from '@/utils/getters';

const BlogPage = ({ posts, currentPage, numPages }) => {
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
          <Pagination currentPage={currentPage} numOfPages={numPages}/>
        </>
    )
};

export const getStaticPaths = async () => {
  const files = getFiles();
  const numberOfPages = Math.ceil(files.length / POSTS_PER_PAGE);

  let paths = [];

  for (let i = 1; i <= numberOfPages; i++) {
    paths.push({
      params: {
        page_index: i.toString()
      }
    })
  }
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
    const page = parseInt(params && params.page_index) || 1;
    const posts = getPosts();
    const files = getFiles();

    // вычисление числа постов пагинация
    const numberOfPages = Math.ceil(files.length / POSTS_PER_PAGE);
    const orderedPosts = posts.slice((page - 1) * POSTS_PER_PAGE,(page - 1) * POSTS_PER_PAGE + POSTS_PER_PAGE);

    return {
      props: {
        posts: orderedPosts,
        numPages: numberOfPages,
        currentPage: page,
      }
    }
  }

export default BlogPage
