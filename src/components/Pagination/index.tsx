import Link from 'next/link';
import classes from '../../styles/pagination.module.css';

// TODO подумать как сделать так если страниц будет много например больше 10
// как отображать пагинацию в удобном виде (иммется ввиду цифры)

interface IPaginationProps {
  currentPage: number;
  numOfPages: number;
}

export const Pagination = ({ currentPage, numOfPages }: IPaginationProps) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numOfPages;
  const prevPage = `/blog/page/${currentPage - 1}`;
  const nextPage = `/blog/page/${currentPage + 1}`;

  if (numOfPages === 1) return null;

  return (
    <div className={classes.pagination}>
      <ul className={classes.pagination_list}>
        {!isFirst && (
          <Link href={prevPage} passHref>
            <li className={classes.prev}>Предыдущая</li>
          </Link>
        )}
        {Array.from({ length: numOfPages }, (_, i) => (
          <Link href={`/blog/page/${i + 1}`} key={i * 100} passHref>
            <li className={classes.number}>{i + 1}</li>
          </Link>
        ))}
        {!isLast && (
          <Link href={nextPage} passHref>
            <li className={classes.next}>Следующая</li>
          </Link>
        )}
      </ul>
    </div>
  );
};
