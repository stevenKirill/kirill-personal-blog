export interface IPost {
  category: string;
  cover_image: string;
  date: string;
  excerpt: string;
  title: string;
  type: string;
  slug: string;
  body: {
    code: string;
    raw: string;
  }
}
