import styles from "@/styles/post.module.css";
import CategoryBar from "@/components/CategoryBar";
import { Post } from "@/components/Post";
import { POSTS_PER_PAGE } from "@/consts";
import { sortByDate } from "../../utils/utils";
import { allBlogs } from "../../.contentlayer/generated";

// export const generateStaticParams = () => {
//   const numberOfPages = Math.ceil(allBlogs.length / POSTS_PER_PAGE);
//   let paths = [];

//   for (let i = 1; i <= numberOfPages; i++) {
//     paths.push({ page_index: i.toString() });
//   }
//   return paths;
// };

const populateCategories = (categories: string[]) => {
  let uniqueCategories: string[] = [];
  categories.forEach((category) => {
    if (uniqueCategories.indexOf(category) === -1) {
      uniqueCategories.push(category);
    }
  });
  return uniqueCategories;
}


const BlogPage = () => {
  // const page = parseInt(props.p && props.p.page_index) || 1;
  const page = 1;
  const categories = allBlogs.map((post) => post.category);
  const uniqueCategories = populateCategories(categories);

  // const numberOfPages = Math.ceil(allBlogs.length / POSTS_PER_PAGE);
  const orderedPosts = allBlogs.slice(
    (page - 1) * POSTS_PER_PAGE,
    (page - 1) * POSTS_PER_PAGE + POSTS_PER_PAGE
  );
  console.log(orderedPosts, '=> orderedPosts');
  const sortedPosts = orderedPosts.sort(sortByDate);
  return (
    <>
      <div className={styles.content}>
        <div className={styles.posts}>
          {sortedPosts.map((post) => {
            return <Post post={post} key={post.slug} compact={false} />;
          })}
        </div>
        <CategoryBar categories={uniqueCategories} />
      </div>
    </>
  );
};

export default BlogPage;
