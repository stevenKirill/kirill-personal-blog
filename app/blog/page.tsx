import { POSTS_PER_PAGE } from "@/consts";
import { calculatePosts, createCategories, getCategoryItem, sortByDate } from "../../utils/utils";
import { allBlogs } from "../../.contentlayer/generated";
import classes from './blog.module.css';
import CardWithTitle from "@/components/CardWithTitle";

export const generateStaticParams = () => {
  const numberOfPages = Math.ceil(allBlogs.length / POSTS_PER_PAGE);
  let paths = [];

  for (let i = 1; i <= numberOfPages; i++) {
    paths.push({ page_index: i.toString() });
  }
  return paths;
};

// const numberOfPages = Math.ceil(allBlogs.length / POSTS_PER_PAGE);
// let paths = [];

// for (let i = 1; i <= numberOfPages; i++) {
//   paths.push({ page_index: i.toString() });
// }

  // const orderedPosts = allBlogs.slice(
  //   (page - 1) * POSTS_PER_PAGE,
  //   (page - 1) * POSTS_PER_PAGE + POSTS_PER_PAGE
  // );

const BlogPage = () => {
  const categories = allBlogs.reduce(createCategories, []);
  categories.forEach((category) => {
    category.posts.sort(sortByDate);
  });
  return (
    <div className={classes.bg}>
      <div className={classes.posts}>
        {categories.map((category) => {
          const { text } = getCategoryItem(category.title);
          const numOfArticles = calculatePosts(category.posts);
          return (
            <CardWithTitle
              key={category.title}
              text={text}
              numOfArticles={numOfArticles}
              category={category}
            />
          )
        })}
      </div>
    </div>
  );
};

export default BlogPage;
