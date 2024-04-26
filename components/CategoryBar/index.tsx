import { getCategoryItem } from "../../utils/utils";
import classes from "./categories.module.css";
import Link from "next/link";

interface ICategoryBarProps {
  categories: string[];
}

const CategoryBar = ({ categories }: ICategoryBarProps) => {
  const tmp = [ 'PSYCHOLOGY', 'PROGRAMMING', 'd', 'd', 'f', 'f', 'e', 't' ];
  return (
    <aside className={classes.wrapper}>
      <h2 className={classes.title}>Категории</h2>
      <div className={classes.linkWrapper}>
        {tmp.map((category) => {
          const { text } = getCategoryItem(category);
          return (
            <div className={`${classes.link}`} key={text}>
              <Link href={`/category/${category.toLowerCase()}`}>
                {text}
              </Link>
            </div>
          );
        })}
      </div>
  </aside>
  )
}

export default CategoryBar;
