import Head from 'next/head';
import SearchBar from '@/components/SearchBar/SearchBar';
import styles from '@/styles/main_page.module.css';
import { sortByDate } from '@/utils/utils';
import { allBlogs } from '@/contentlayer/generated';

export default function Home({ posts }) {
  return (
    <div className={styles.wrap}>
      <Head>
        <title>Главная</title>
        <meta name="keywords" content="блог,статьи,интерсно,программирование,саморазвитие,успех,самосовершенствование"/>
        <meta name="description" content=""/>
      </Head>
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
            <p>ты можешь почитать подробную информацию обо мне в разделе эбаут</p>
            <p className={styles.last_p}>если у тебя есть вопросы или предложения ты можешь связаться со мной в <a href="https://t.me/stevenPav" target="_blank" rel="noreferrer">телеге</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticProps = () => {
  const posts = allBlogs.sort(sortByDate);
  return { props: { posts } };
};