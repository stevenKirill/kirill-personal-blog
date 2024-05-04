import { useMDXComponent } from "next-contentlayer/hooks";
import { allBlogs, Blog } from "@/content";
import MDXComponents from "../../../components/MDXComponents";
import Link from "next/link";
import styles from "../../../styles/post.module.css";
import { getCategoryItem } from "../../../utils/utils";
import SharedIcons from "@/components/SharedIcons";

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
        <button className={styles.back_button} role="button">
          Назад
        </button>
      </Link>
      <div className={styles.card}>
        <h1 className={styles.post_title}>{post.title}</h1>
        <div className={styles.post_date}>Опубликовано: {post.date}</div>
        <div className={styles.post_category_2}>
          {getCategoryItem(post.category).text}
        </div>
        <div className={styles.post_image_big}>
          <img src={post.cover_image} alt={styles.post_title} />
        </div>
        <div className={styles.post_body}>
          <Component
            components={{ ...MDXComponents }}
          />
        </div>
        <SharedIcons post={post} />
      </div>
    </div>
  );
};

export default PostPage;
