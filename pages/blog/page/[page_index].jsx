import Head from 'next/head';
import styles from '@/styles/post.module.css';
import CategoryBar from '@/components/CategoryBar/CategoryBar';
import { Post } from '@/components/Post/Post';
import { POSTS_PER_PAGE } from '@/consts/consts';
import { Pagination } from '@/components/Pagination/Pagination';
import { sortByDate } from '@/utils/utils';
import { allBlogs } from '@/contentlayer/generated';

const BlogPage = ({ posts, currentPage, numPages, categories }) => {
    return (
        <>
          <Head>
            <title>Статьи Кирилла Павловского</title>
            <meta name="keywords" content="блог,Кирилл,Павловский,программирование,психология,спорт,питание"/>
            <meta name="description" content="блог о программировании,психологии,спорте и других интересных темах."/>
          </Head>
          <div className={styles.content}>
            <div className={styles.posts}>
                {posts.map((post) => {
                    return <Post post={post} key={post.slug} compact={false}/>
                })}
            </div>
            <CategoryBar categories={categories}/>
          </div>
          <Pagination currentPage={currentPage} numOfPages={numPages}/>
        </>
    )
};

export const getStaticPaths = () => {
  const numberOfPages = Math.ceil(allBlogs.length / POSTS_PER_PAGE);
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

export const getStaticProps = ({ params }) => {
    const page = parseInt(params && params.page_index) || 1;

    const categories = allBlogs.map(post => post.category);
    const uniqueCategories = [...new Set(categories)];

    // вычисление числа постов пагинация
    const numberOfPages = Math.ceil(allBlogs.length / POSTS_PER_PAGE);
    const orderedPosts = allBlogs.slice((page - 1) * POSTS_PER_PAGE,(page - 1) * POSTS_PER_PAGE + POSTS_PER_PAGE);
    return {
      props: {
        posts:  orderedPosts.sort(sortByDate),
        numPages: numberOfPages,
        currentPage: page,
        categories: uniqueCategories,
      }
    }
  }

export default BlogPage
