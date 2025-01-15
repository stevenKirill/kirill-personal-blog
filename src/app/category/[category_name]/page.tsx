import { allBlogs } from '@/content';
import {
  calculatePosts,
  createCategories,
  getCategoryItem,
  sortByDate,
} from '../../../utils/utils';
import { IProps } from '../types';
import CardWithTitle from '@/components/CardWithTitle';
import styles from './classes.module.css';

export async function generateMetadata({ params }: IProps) {
  const categoryPosts = allBlogs.filter(
    (post) => post.category.toLowerCase() === params.category_name,
  );
  const metaData = categoryPosts.map((post) => ({
    title: post.title,
    date: post.date,
    first_text: post.first_text,
    category: post.category,
  }));
  const keywords = metaData.map((post) => post.title).join(', ');
  return {
    title: 'Категории',
    description: `${metaData[0].category}`,
    keywords,
    openGraph: {
      title: `${metaData[0].category[0]}${metaData[0].category.slice(1).toLowerCase()}`,
      description: '',
      type: 'website',
      url: `https://www.kirill-pavlovskii.ru/${metaData[0].category.toLowerCase()}`,
      images: [
        {
          url: 'https://www.kirill-pavlovskii.ru/_next/image?url=%2Fimages%2Fother%2Flogo.jpg&w=128&q=75',
          width: 128,
          height: 192,
          alt: 'Логотип сайта',
        },
      ],
    },
  };
}

export const generateStaticParams = () => {
  const categories = allBlogs.map((blog) => blog.category.toLowerCase());
  return categories.map((category) => ({
    params: { category_name: category },
  }));
};

const CategoryBlogPage = ({ params }: IProps) => {
  const categoryPosts = allBlogs.filter(
    (post) => post.category.toLowerCase() === params.category_name,
  ).reduce(createCategories, []);
  categoryPosts.forEach((category) => {
    category.posts.sort(sortByDate);
  });
  return (
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
          );
        })}
      </div>
    </div>
  );
};

export default CategoryBlogPage;
