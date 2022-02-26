import { useMDXComponent } from 'next-contentlayer/hooks'
// import { allBlogs } from '.contentlayer/generated';
import { BlogLayout } from '../../layouts/BlogLayout';
import { allBlogs } from '../../.contentlayer/generated';

const PostPage = ({ post, pageName }) => {
  const Component = useMDXComponent(post.body.code);
  return (
    <BlogLayout post={post}>
      <Component/>
    </BlogLayout>
  )
};

export const getStaticPaths = () => {
  return {
    paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false
  };
}

export const getStaticProps = ({ params }) => {
  const post = allBlogs.find((post) => post.slug === params.slug);
  return { props: { post, pageName: 'BLOG_PAGE' } };
}

export default PostPage;