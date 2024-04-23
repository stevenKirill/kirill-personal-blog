import styles from '../styles/main_page.module.css';
import { IPost } from '@/types';


interface IHomeProps {
  posts: IPost[];
}

export default function Home({ posts = [] }: IHomeProps) {
  return (
    <div className={styles.wrap}>
      hello
    </div>
  )
};

// export const getStaticProps = () => {
//   const posts = allBlogs.sort(sortByDate);
//   return { props: { posts } };
// };
