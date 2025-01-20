/* eslint-disable @typescript-eslint/naming-convention */
import { useMDXComponent } from 'next-contentlayer/hooks';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allBlogs, Blog } from '@/content';
import classes from './post.module.css';
import MDXComponents from '@/components/MDXComponents';
import { IProps, IPostPageProps } from './types';
import styles from '../../../styles/post.module.css';
import ScrollLine from '@/components/ScrollLine';

export async function generateMetadata(
  { params }: IProps,
): Promise<Metadata> {
  const post = allBlogs.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  const {
    title,
    date,
    first_text,
    cover_image,
    slug,
  } = post;

  const ogImage = cover_image
    ? `https://www.kirill-pavlovskii.ru/${cover_image}`
    : `https://www.kirill-pavlovskii.ru/og?title=${title}`;

  const metadata: Metadata = {
    metadataBase: new URL('https://www.kirill-pavlovskii.ru/'),
    title: `${title} | Кирилл Павловский`,
    description: first_text,
    keywords: `${title}, ${slug}, ${first_text}`,
    openGraph: {
      title: `${title} | Кирилл Павловский`,
      description: first_text,
      type: 'article',
      publishedTime: date,
      url: `https://www.kirill-pavlovskii.ru/blog/${slug}`,
      images: [{ url: ogImage, alt: title }],
    },
  };

  return metadata;
}

export const generateStaticParams = () => allBlogs.map((p) => ({ slug: p.slug }));

const PostPage = ({ params }: IPostPageProps) => {
  const post = allBlogs.find((blog) => blog.slug === params.slug) as Blog;
  if (!post) {
    notFound();
  }
  const Component = useMDXComponent(post.body.code);
  return (
    <div className={styles.container}>
      <ScrollLine />
      <Link href="/blog">
        <button type="button" className={classes.link}>
          Назад
        </button>
      </Link>
      <div className={classes.card}>
        <h1 className={classes.post_title}>{post.title}</h1>
        <div className={classes.post_date}>
          Опубликовано:
          {' '}
          {post.date}
        </div>
        <div className={styles.post_image_big}>
          <img src={post.cover_image} alt={styles.post_title} />
        </div>
        <div className={styles.post_body}>
          <Component components={{ ...MDXComponents }} />
        </div>
      </div>
    </div>
  );
};

export default PostPage;
