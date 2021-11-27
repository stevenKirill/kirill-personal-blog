import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import matter from 'gray-matter';
import styles from '@/styles/post.module.css';
import { Post } from '@/components/Post/Post';

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
    const files = fs.readdirSync(path.join('posts'));
    const categories = files.map(fileName => {
        const markdownAndMeta = fs.readFileSync(path.join('posts',fileName),'utf-8');

        const { data: frontMatter } = matter(markdownAndMeta);
        return frontMatter.category.toLowerCase();
    });

    const paths = categories.map(category => ({
        params: { category_name: category }
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async ({ params: { category_name }}) => {
    const files = fs.readdirSync(path.join('posts'));
    const categoryPosts = files
    .map(fileName => {
        const slug = fileName.replace('.md','');
        const meta = fs.readFileSync(path.join('posts',fileName),'utf-8');
        const { data: frontmatter } = matter(meta);
        return {
          slug,
          frontmatter
        }
      })
      .filter(post => post.frontmatter.category.toLowerCase() === category_name);

    return {
        props: {
            posts: categoryPosts,
            category: category_name
        }
    };
};

export default CategoryBlogPage;