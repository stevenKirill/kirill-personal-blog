interface IProps {
  children: React.ReactNode;
}

const BlogLayout = ({ children }: IProps) => {
  return (
    <div>
      <div>layout post page</div>
      {children}
    </div>
  );
};

export default BlogLayout;
