import { getCategoryItem } from "../../utils/utils";
import classes from "../../styles/categories.module.css";
import Link from "next/link";

interface ICategoryBarProps {
  categories: string[];
}

const CategoryBar = ({ categories }: ICategoryBarProps) => (
  <aside className={classes.wrapper}>
    <span className={classes.title}>#категории</span>
    {categories.map((category) => {
      const { text, color } = getCategoryItem(category);
      return (
        <div className={`${color} ${classes.link}`} key={text}>
          <Link href={`/category/${category.toLowerCase()}`}>
            {text}
          </Link>
        </div>
      );
    })}
  </aside>
);

export default CategoryBar;
