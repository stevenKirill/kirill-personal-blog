import { Blog } from "@/.contentlayer/generated";
import { CATEGORIES } from "@/consts";


export const getCategoryItem = (category: string) => {
  switch (category) {
    case CATEGORIES.PROGRAMMING:
      return {
        text: "Технологии",
        color: "goldenCategory",
      };
    case CATEGORIES.PSYCHOLOGY:
      return {
        text: "Психология",
        color: "lightGreenCategory",
      };
    case CATEGORIES.SPORT:
      return {
        text: "Спорт",
        color: "lightBlueCategory",
      };
    case CATEGORIES.BUSINESS:
      return {
        text: "Бизнес",
        color: "orangeCategory",
      };
    default:
      return {
        text: "Другое",
        color: "purpleCategory",
      };
  }
};

export const sortByDate = (a: Blog, b: Blog) => {
  // @ts-ignore
  return new Date(b.date) - new Date(a.date);
};

export const MONTHS = {
  0: "Январь",
  1: "Февраль",
  2: "Март",
  3: "Апрель",
  4: "Май",
  5: "Июнь",
  6: "Июль",
  7: "Август",
  8: "Сентябрь",
  9: "Октябрь",
  10: "Ноябрь",
  11: "Декабрь",
};

export const cx = (...classNames: string[]) => classNames.filter(Boolean).join(" ");
