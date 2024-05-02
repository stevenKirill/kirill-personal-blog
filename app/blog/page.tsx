import { Post } from "@/components/Post";
import { POSTS_PER_PAGE } from "@/consts";
import { getArticleWord, getCategoryItem, populateCategories, sortByDate } from "../../utils/utils";
import { allBlogs, Blog } from "../../.contentlayer/generated";
import classes from './blog.module.css';

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

  // [
  //   {
  //     title: 'react',
  //     posts: [
  //       {

  //       }
  //     ]
  //   }
  // ]

interface ICategoryPost {
  title: string;
  posts: Blog[]
}

const createCategories = (acc: ICategoryPost[], curr: Blog): ICategoryPost[] => {
  const wasBefore = acc.find((p) => p.title === curr.category);
  if (wasBefore) {
    const index = acc.indexOf(wasBefore);
    if (index !== -1) {
      const current = acc[index];
      current.posts = [...current.posts, curr];
      return acc;
    }
    return acc;
  } else {
    return [...acc, {
      title: curr.category,
      posts: [],
    }];
  }
};

const calculatePosts = (posts: Blog[]) => posts.length;

const BlogPage = () => {
  const categories = allBlogs.reduce(createCategories, []);
  categories.forEach((category) => {
    category.posts.sort(sortByDate);
  });
  return (
    <div className={classes.posts}>
      {categories.map((category) => {
        const { text } = getCategoryItem(category.title);
        const numOfArticles = calculatePosts(category.posts);
        return (
          <>
          <div className={classes.categoryTitle}>
            <h1 className={classes.categoryText}>{text}</h1>
            <span className={classes.categoryTitleText}>
              {numOfArticles}
              &nbsp;
              {getArticleWord(numOfArticles)}
            </span>
          </div>
            <div className={classes.category} key={category.title}>
              {category.posts.map((post) => <Post post={post} key={post.slug} />)}
            </div>
          </>
        )
      })}
    </div>
  );
};

export default BlogPage;
