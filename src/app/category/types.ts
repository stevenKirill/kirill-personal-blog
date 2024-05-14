import { Blog } from "@/.contentlayer/generated";

export interface IProps {
  params: {
    category_name: string;
  }
}

export interface ICategoryPost {
  title: string;
  posts: Blog[]
}
