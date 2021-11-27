import classes from '@/styles/pagination.module.css';
import Link from 'next/link';

// TODO подумать как сделать так если страниц будет много например больше 10 
// как отображать пагинацию в удобном виде (иммется ввиду цифры)
export const Pagination = ({ currentPage, numOfPages }) => {
    const isFirst = currentPage === 1;
    const isLast = currentPage === numOfPages;
    const prevPage = `/blog/page/${currentPage - 1}`;
    const nextPage = `/blog/page/${currentPage + 1}`;

    if (numOfPages === 1) return null;

    return (
        <div className={classes.pagination}>
            <ul className={classes.pagination_list}>
            {!isFirst &&
                <Link href={prevPage}>
                    <li className={classes.prev}>
                        Предыдущая
                    </li>
                </Link>}
                {Array.from({length: numOfPages}, (_, i) => (
                    <Link href={`/blog/page/${i + 1}`} key={i * 100}>
                        <li className={classes.number}>{i + 1}</li>
                    </Link>
                ))}
                {!isLast &&
                <Link href={nextPage}>
                    <li className={classes.next}>
                        Следующая
                    </li>
                </Link>}
            </ul>
        </div>
    )
};
