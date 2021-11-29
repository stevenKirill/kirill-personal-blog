import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

/** Чтение файлов */
export const getFiles = () => {
    const files = fs.readdirSync(path.join('posts'));
    return files;
};

/** Получение постов из файлов */
export const getPosts = () => {
    const files = getFiles();
    const posts = files.map(fileName => {
      const slug = fileName.replace('.md','');
      const meta = fs.readFileSync(path.join('posts',fileName),'utf-8');
      const { data: frontmatter } = matter(meta);
      return {
        slug,
        frontmatter
      }
    });
    return posts
};

/** Получение категорий */
export const getPostCategories = () => {
    const files = getFiles();
    const categories = files.map(fileName => {
        const markdownAndMeta = fs.readFileSync(path.join('posts',fileName),'utf-8');

        const { data: frontMatter } = matter(markdownAndMeta);
        return frontMatter.category.toLowerCase();
    });
    return categories;
};