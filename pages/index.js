import Head from 'next/head';

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Главная</title>
        <meta></meta>
      </Head>
      <div>
        Главная страница сайта
      </div>
    </div>
  )
}