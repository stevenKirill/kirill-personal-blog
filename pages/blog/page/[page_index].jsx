import Head from 'next/head';
import styles from '@/styles/post.module.css';
import CategoryBar from '@/components/CategoryBar/CategoryBar';
import { Post } from '@/components/Post/Post';
import { POSTS_PER_PAGE } from '@/consts/consts';
import { Pagination } from '@/components/Pagination/Pagination';
import { getPosts, getFiles } from '@/utils/getters';
import { sortByDate } from '@/utils/utils';

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

    const categories = posts.map(post => post.frontmatter.category);
    const uniqueCategories = [...new Set(categories)];

    // вычисление числа постов пагинация
    const numberOfPages = Math.ceil(files.length / POSTS_PER_PAGE);
    const orderedPosts = posts.slice((page - 1) * POSTS_PER_PAGE,(page - 1) * POSTS_PER_PAGE + POSTS_PER_PAGE);
  console.log(orderedPosts.sort(sortByDate),'=.d')
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
