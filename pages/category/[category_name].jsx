import Head from 'next/head';
import styles from '@/styles/post.module.css';
import { Post } from '@/components/Post/Post';
import { getPosts, getPostCategories } from '@/utils/getters';

/** Страница категории постов. */
const CategoryBlogPage = ({ posts, category }) => {
    // TODO подумать мб в будущем сделат еще и пагинацию на каждую категорию постов.
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
                return <Post post={post} key={post.slug}/>
            })}
        </div>
    </>
  )
};

export const getStaticPaths =  async () => {
    const categories = getPostCategories();

    const paths = categories.map(category => ({
        params: { category_name: category }
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async ({ params: { category_name }}) => {
    const categoryPosts = getPosts().filter(post => post.frontmatter.category.toLowerCase() === category_name);
    return {
        props: {
            posts: categoryPosts,
            category: category_name
        }
    };
};

export default CategoryBlogPage;