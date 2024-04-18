import styles from "@/styles/post.module.css";
import { Post } from "../../../components/Post";
import { allBlogs } from "@/content";
import { sortByDate } from "../../../utils/utils";

export const generateStaticParams = () => {
  const categories = allBlogs.map((blog) => blog.category.toLowerCase());
  const paths = categories.map((category) => ({
    params: { category_name: category },
  }));

  return {
    paths,
    fallback: false,
  };
};

const CategoryBlogPage = ({ params }) => {
  console.log(params, '[> params');
  // TODO подумать мб в будущем сделать еще и пагинацию на каждую категорию постов.
  // const categoryPosts = allBlogs.filter(
  //   (post) => post.category.toLowerCase() === category_name
  // );
  return (
    <>
      {/* <div className={styles.category_title_container}>
        <div>#{category}</div>
      </div>
      <div className={styles.posts}>
        {posts.map((post) => {
          return <Post post={post} key={post.slug} compact={false} />;
        })}
      </div> */}
      <div>fghbdtn</div>
    </>
  );
};

// export const getStaticProps = ({ params: { category_name } }) => {
//   const categoryPosts = allBlogs.filter(
//     (post) => post.category.toLowerCase() === category_name
//   );
//   return {
//     props: {
//       posts: categoryPosts.sort(sortByDate),
//       category: category_name,
//     },
//   };
// };

export default CategoryBlogPage;
