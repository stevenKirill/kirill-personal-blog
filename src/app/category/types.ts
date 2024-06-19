import { Blog } from '@/content';

export interface IProps {
  params: {
    category_name: string;
  }
}

export interface ICategoryPost {
  title: string;
  posts: Blog[]
}
