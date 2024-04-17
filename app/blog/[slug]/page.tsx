import { useMDXComponent } from "next-contentlayer/hooks";
import { allBlogs } from "@/content";
import MDXComponents from "../../../components/MDXComponents";

export function generateStaticParams() {
  console.log('generateStaticParams =<<<');
  return allBlogs.map((blog) => ({ slug: blog._raw.flattenedPath }));
}

const PostPage = ({ post }) => {
  console.log(post, '=111');
  const Component = useMDXComponent(post.body.code);
  return (
    // <Component
    //   components={{
    //     ...MDXComponents,
    //   }}
    // />
    <div>1111</div>
  );
};

// export const getStaticPaths = () => {
//   return {
//     paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
//     fallback: false,
//   };
// };

// export const getStaticProps = ({ params }) => {
//   const post = allBlogs.find((post) => post.slug === params.slug);
//   return { props: { post, pageName: "BLOG_PAGE" } };
// };

export default PostPage;
