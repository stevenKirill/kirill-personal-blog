import Head from 'next/head';
import styles from '@/styles/post.module.css';
import { Post } from '@/components/Post/Post';
import { allBlogs } from '../../.contentlayer/generated';
import { sortByDate } from '@/utils/utils';

/** Страница категории постов. */
const CategoryBlogPage = ({ posts, category }) => {
    // TODO подумать мб в будущем сделать еще и пагинацию на каждую категорию постов.
  return (
    <>
        <Head>
            <title>{category}</title>
            <meta name="keywords" content={`${category} категория,блог,успех,читать,полезная информаиция`}/>
            <meta name="description" content="блог о программировании,психологии,спорте и других интересных темах."/>
        </Head>
        <div className={styles.category_title_container}>
            <div>#{category}</div>
        </div>
        <div className={styles.posts}>
            {posts.map((post) => {
                return <Post post={post} key={post.slug} compact={false}/>
            })}
        </div>
    </>
  )
};

export const getStaticPaths = () => {
    const categories = allBlogs.map(blog => blog.category.toLowerCase());
    const paths = categories.map(category => ({
        params: { category_name: category }
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = ({ params: { category_name }}) => {
    const categoryPosts = allBlogs.filter(post => post.category.toLowerCase() === category_name);
    return {
        props: {
            posts: categoryPosts.sort(sortByDate),
            category: category_name
        }
    };
};

export default CategoryBlogPage;