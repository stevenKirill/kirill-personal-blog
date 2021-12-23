import { getCategoryItem } from "@/utils/utils";
import classes from '@/styles/categories.module.css';
import Link from "next/link";

/** Компонент боковое меню с категориями. */
const CategoryBar = ({ categories }) => {
    return (
        <aside className={classes.wrapper}>
            <span className={classes.title}>#категории</span>
            {categories.map(category => {
                const { text, color } = getCategoryItem(category);
                return (
                    <div className={`${color} ${classes.link}`} key={text}>
                        <Link href={`/category/${category.toLowerCase()}`}>
                            <a>{text}</a>
                        </Link>
                    </div>
                )
            })}
        </aside>
    )
};

export default CategoryBar
