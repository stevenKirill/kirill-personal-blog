import styles from "@/styles/post.module.css";
import { Post } from "../../../components/Post";
import { allBlogs } from "@/content";
import { getCategoryItem, sortByDate } from "../../../utils/utils";

export const generateStaticParams = () => {
  const categories = allBlogs.map((blog) => blog.category.toLowerCase());
  return categories.map((category) => ({
    params: { category_name: category },
  }));
};

interface IProps {
  params: {
    category_name: string;
  }
}

const CategoryBlogPage = ({ params }: IProps) => {
  const categoryPosts = allBlogs.filter(
    (post) => post.category.toLowerCase() === params.category_name
  ).sort(sortByDate);
  const category = getCategoryItem(params.category_name.toUpperCase());
  return (
    <>
      <div className={styles.category_title_container}>
        <div>{category.text}</div>
      </div>
      <div className={styles.posts}>
        {categoryPosts.map((post) => {
          return <Post post={post} key={post.slug} compact={false} />;
        })}
      </div>
    </>
  );
};

export default CategoryBlogPage;
