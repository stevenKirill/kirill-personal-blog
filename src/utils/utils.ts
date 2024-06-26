import { Blog } from '@/content';
import { CATEGORIES } from '@/consts';
import { ICategoryPost } from '@/types';

export const getCategoryItem = (category: string) => {
  switch (category) {
    case CATEGORIES.REACT:
      return {
        text: 'React',
        color: 'goldenCategory',
      };
    case CATEGORIES.CAREER:
      return {
        text: 'Карьера',
        color: 'lightGreenCategory',
      };
    case CATEGORIES.JAVASCRIPT:
      return {
        text: 'JavaScript',
        color: 'lightBlueCategory',
      };
    case CATEGORIES.TYPESCRIPT:
      return {
        text: 'TypeScript',
        color: 'orangeCategory',
      };
    default:
      return {
        text: 'Другое',
        color: 'purpleCategory',
      };
  }
};

// @ts-ignore
export const sortByDate = (a: Blog, b: Blog) => new Date(b.date) - new Date(a.date);

export const MONTHS: { [key in number]: string } = {
  0: 'Январь',
  1: 'Февраль',
  2: 'Март',
  3: 'Апрель',
  4: 'Май',
  5: 'Июнь',
  6: 'Июль',
  7: 'Август',
  8: 'Сентябрь',
  9: 'Октябрь',
  10: 'Ноябрь',
  11: 'Декабрь',
};

export const cx = (...classNames: string[]) => classNames.filter(Boolean).join(' ');

export const populateCategories = (categories: string[]) => {
  const uniqueCategories: string[] = [];
  categories.forEach((category) => {
    if (uniqueCategories.indexOf(category) === -1) {
      uniqueCategories.push(category);
    }
  });
  return uniqueCategories;
};

export function getArticleWord(number: number) {
  if (number % 10 === 1 && number % 100 !== 11) {
    return 'статья';
  } if (number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20)) {
    return 'статьи';
  }
  return 'статей';
}

export const calculatePosts = (posts: Blog[]) => posts.length;

export const createCategories = (acc: ICategoryPost[], curr: Blog): ICategoryPost[] => {
  const wasBefore = acc.find((p) => p.title === curr.category);
  if (wasBefore) {
    const index = acc.indexOf(wasBefore);
    if (index !== -1) {
      const current = acc[index];
      current.posts = [...current.posts, curr];
      return acc;
    }
    return acc;
  }
  return [...acc, {
    title: curr.category,
    posts: [curr],
  }];
};
