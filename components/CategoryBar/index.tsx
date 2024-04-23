import { getCategoryItem } from "../../utils/utils";
import classes from "./categories.module.css";
import Link from "next/link";

interface ICategoryBarProps {
  categories: string[];
}

const CategoryBar = ({ categories }: ICategoryBarProps) => {
  console.log(categories);
  let tmp = [ 'PROGRAMMING', 'PSYCHOLOGY', 'lol', 'ded', 'PSYCHOLdedededOGY', 'dw', 'dwd' ];
  return (
    <aside className={classes.wrapper}>
    <span className={classes.title}>Категории</span>
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
