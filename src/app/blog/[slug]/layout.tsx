interface IProps {
  children: React.ReactNode;
}

const BlogLayout = ({ children }: IProps) => (
  <div>
    {children}
  </div>
);

export default BlogLayout;
