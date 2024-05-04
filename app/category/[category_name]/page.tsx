import { allBlogs } from "@/content";
import {
  calculatePosts,
  createCategories,
  getCategoryItem,
  sortByDate,
} from "../../../utils/utils";
import { IProps } from "../types";
import CardWithTitle from "@/components/CardWithTitle";
import styles from "./classes.module.css";

export const generateStaticParams = () => {
  const categories = allBlogs.map((blog) => blog.category.toLowerCase());
  return categories.map((category) => ({
    params: { category_name: category },
  }));
};

const CategoryBlogPage = ({ params }: IProps) => {
  const categoryPosts = allBlogs.filter(
    (post) => post.category.toLowerCase() === params.category_name
  ).reduce(createCategories, []);
  categoryPosts.forEach((category) => {
    category.posts.sort(sortByDate);
  });
  return (
    <>
      <div className={styles.bg}>
        <div className={styles.posts}>
          {categoryPosts.map((post) => {
          const { text } = getCategoryItem(post.title);
          const numOfArticles = calculatePosts(post.posts);
            return (
              <CardWithTitle
                key={post.title}
                text={text}
                numOfArticles={numOfArticles}
                category={post}
              />
            )
          })}
        </div>
      </div>
    </>
  );
};

export default CategoryBlogPage;
