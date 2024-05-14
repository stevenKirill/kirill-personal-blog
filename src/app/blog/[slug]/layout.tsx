interface IProps {
  children: React.ReactNode;
}

const BlogLayout = ({ children }: IProps) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default BlogLayout;
