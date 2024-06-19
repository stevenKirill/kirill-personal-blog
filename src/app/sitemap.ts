import { MetadataRoute } from 'next';
import { allBlogs } from '@/content';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const postEntries:MetadataRoute.Sitemap = allBlogs.map((post) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly',
  }));
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      changeFrequency: 'daily',
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
      changeFrequency: 'daily',
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
      changeFrequency: 'daily',
    },
    ...postEntries,
  ];
}
