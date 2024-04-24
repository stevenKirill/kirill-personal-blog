import MainPagePost from '@/components/MainPagePost';
import styles from './main_page.module.css';
import { allBlogs } from "@/content";
import CategoryBar from '@/components/CategoryBar';
import { populateCategories } from '@/utils/utils';

export default function Home() {
  const firstTen = allBlogs.slice(0, 10);
  const categories = allBlogs.map((post) => post.category);
  const uniqueCategories = populateCategories(categories);
  return (
    <main className={styles.wrap}>
      <section className={styles.posts}>
        <h2 className={styles.title}>Последние публикации</h2>
        {firstTen.map((post) => (
          <MainPagePost
            title={post.title}
            excerpt={post.excerpt}
            slug={post.slug}
            key={post._id}
          />
        ))}
      </section>
      <section className={styles.rightSection}>
        <CategoryBar categories={uniqueCategories} />
        <div>
          популярные
        </div>
      </section>
    </main>
  )
};
