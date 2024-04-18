import SearchBar from '../components/SearchBar';
import styles from '../styles/main_page.module.css';
import { IPost } from '@/types';


interface IHomeProps {
  posts: IPost[];
}

export default function Home({ posts = [] }: IHomeProps) {
  return (
    <div className={styles.wrap}>
      <SearchBar posts={posts}/>
      <div className={styles.main}>
        <div className={styles.inner}>
          <div className={styles.header}>
            <h1>👋</h1>
          </div>
          <div className={styles.description}>
            <p>на этом сайте ты можешь найти много полезного.</p>
            <p>мои статьи находяться в разделе почитать</p>
            <p>также я собрал видео, на разные интересующие меня темы в разделе посмотреть</p>
            <p>ты можешь найти больше информации обо мне в разделе резюме</p>
            <p className={styles.last_p}>если у тебя есть вопросы или предложения ты можешь связаться со мной в
              <a
                href="https://t.me/kirillPavlovskii"
                target="_blank"
                rel="noreferrer"
                style={{color: 'rgb(41,33,33)', display: 'inline-block',  marginLeft: '4px' }}
              >
                телеге
                </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};

// export const getStaticProps = () => {
//   const posts = allBlogs.sort(sortByDate);
//   return { props: { posts } };
// };
