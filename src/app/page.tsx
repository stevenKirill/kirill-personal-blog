import MainPagePost from '@/components/MainPagePost';
import styles from './main_page.module.css';
import { allBlogs } from '@/content';
import CategoryBar from '@/components/CategoryBar';
import Popular from '@/components/Popular';
import { POPULAR } from '@/consts';
import { sortByDate, populateCategories } from '@/utils/utils';

export default function Home() {
  const firstFive = allBlogs.sort(sortByDate).slice(0, 5);
  const categories = allBlogs.map((post) => post.category);
  const uniqueCategories = populateCategories(categories);
  const popular = allBlogs.filter((post) => POPULAR.includes(post.slug));
  return (
    <main className={styles.wrap}>
      <section className={styles.posts}>
        <h2 className={styles.title}>Последние публикации</h2>
        {firstFive.map((post) => (
          <MainPagePost
            title={post.title}
            excerpt={post.excerpt}
            slug={post.slug}
            // eslint-disable-next-line no-underscore-dangle
            key={post._id}
            firstText={post.first_text}
          />
        ))}
      </section>
      <section className={styles.rightSection}>
        <CategoryBar categories={uniqueCategories} />
        <Popular popularPosts={popular} />
      </section>
    </main>
  );
}
