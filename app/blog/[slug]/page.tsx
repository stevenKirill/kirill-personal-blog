import { useMDXComponent } from "next-contentlayer/hooks";
import { BlogLayout } from "@/layouts/BlogLayout";
import { allBlogs } from "../../../.contentlayer/generated";
import { MDXComponents } from "@/components/MDXComponents/MDXComponents";

const PostPage = ({ post, pageName }) => {
  console.log('PostPage');
  console.log(post);
  console.log(pageName);
  const Component = useMDXComponent(post.body.code);
  return (
    <BlogLayout post={post}>
      <Component
        components={{
          ...MDXComponents,
        }}
      />
    </BlogLayout>
  );
};

export const getStaticPaths = () => {
  return {
    paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps = ({ params }) => {
  const post = allBlogs.find((post) => post.slug === params.slug);
  return { props: { post, pageName: "BLOG_PAGE" } };
};

export default PostPage;
