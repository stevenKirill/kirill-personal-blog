import { Blog } from '@/content';

export interface IPost {
  category: string;
  cover_image: string;
  date: string;
  excerpt: string;
  first_text: string;
  title: string;
  type: string;
  slug: string;
  body: {
    code: string;
    raw: string;
  }
}

export interface ICategoryPost {
  title: string;
  posts: Blog[]
}
