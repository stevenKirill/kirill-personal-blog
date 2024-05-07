import { useMDXComponent } from "next-contentlayer/hooks";
import { allBlogs, Blog } from "@/content";
import MDXComponents from "../../../components/MDXComponents";
import Link from "next/link";
import classes from './post.module.css';
import styles from "../../../styles/post.module.css";

export const generateStaticParams = () => {
  return allBlogs.map((p) => ({ slug: p.slug }));
};

interface IPostPageProps {
  params: {
    slug: string;
  }
}

const PostPage = ({ params }: IPostPageProps) => {
  const post = allBlogs.find((blog) => blog.slug === params.slug) as Blog;
  const Component = useMDXComponent(post.body.code);
  return (
      <div className={styles.container}>
        <Link href="/blog">
          <button className={classes.link} role="button">
            Назад
          </button>
        </Link>
        <div className={classes.card}>
          <h1 className={classes.post_title}>{post.title}</h1>
          <div className={classes.post_date}>Опубликовано: {post.date}</div>
          <div className={styles.post_image_big}>
            <img src={post.cover_image} alt={styles.post_title} />
          </div>
          <div className={styles.post_body}>
            <Component components={{ ...MDXComponents }}/>
          </div>
        </div>
      </div>
  );
};

export default PostPage;
