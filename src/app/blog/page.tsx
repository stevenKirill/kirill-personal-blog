import { allBlogs } from '@/content';
import { POSTS_PER_PAGE } from '@/consts';
import {
  calculatePosts, createCategories, getCategoryItem, sortByDate,
} from '../../utils/utils';
import CardWithTitle from '@/components/CardWithTitle';
import classes from './blog.module.css';

export async function generateMetadata() {
  const categories = allBlogs.reduce(createCategories, []);
  const titles = categories.map((item) => item.title.toLowerCase()).join(', ');
  return {
    title: 'Блог о разработке web приложений и карьере в IT',
    description: 'Здесь собраны статьи о разработке, технологиях в IT, новых трендах и создании стартапов',
    keywords: `${titles}, разработка, IT, карьера в IT, статьи Кирилла Павловского, Кирилл Павловский, Кирилл Павловский frontend разработчик, разработка сайтов`,
    openGraph: {
      title: 'Блог о разработке web приложений',
      description: 'Здесь собраны статьи о разработке, технологиях в IT, новых трендах и создании стартапов',
      type: 'website',
      url: 'https://www.kirill-pavlovskii.ru/blog',
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
  const numberOfPages = Math.ceil(allBlogs.length / POSTS_PER_PAGE);
  const paths = [];

  for (let i = 1; i <= numberOfPages; i++) {
    paths.push({ page_index: i.toString() });
  }
  return paths;
};

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
          );
        })}
      </div>
    </div>
  );
};

export default BlogPage;
