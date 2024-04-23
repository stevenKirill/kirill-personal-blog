import MainPagePost from '@/components/MainPagePost';
import styles from '../styles/main_page.module.css';
import { allBlogs } from "@/content";

export default function Home() {
  const firstTen = allBlogs.slice(0, 10);
  return (
    <main className={styles.wrap}>
      {firstTen.map((post) => (
        <section key={post._id}>
          <MainPagePost
            title={post.title}
            excerpt={post.excerpt}
          />
        </section>
      ))}
      <section>
        категории
      </section>
      <section>
        популярные
      </section>
    </main>
  )
};
