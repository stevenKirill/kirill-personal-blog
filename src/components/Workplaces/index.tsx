/* eslint-disable react/require-default-props */

import Image, { StaticImageData } from 'next/image';
import { Link } from '../Link';
import classes from './classes.module.css';

type TWorkplace = {
  title: string;
  company: string;
  imageSrc: string | StaticImageData;
  time?: string;
  href?: string;
};

function Workplace({
  title, company, imageSrc, time = '', href = '',
}: TWorkplace) {
  const content = (
    <>
      <div className={classes.work}>
        <Image
          src={imageSrc}
          alt={company}
          width={48}
          height={48}
          className={classes.rounded}
        />
        <div className={classes.companyWrapper}>
          <p className={href ? 'external-arrow' : ''}>{title}</p>
          <p>{company}</p>
        </div>
      </div>
      {time && <time className={classes.time}>{time}</time>}
    </>
  );
  return (
    <li className={classes.transition} key={company}>
      {href ? (
        <Link
          href={href}
          className={classes.link}
        >
          {content}
        </Link>
      ) : (
        <div className={classes.item}>{content}</div>
      )}
    </li>
  );
}

export default function Workplaces({ items }: { items: TWorkplace[] }) {
  return (
    <ul className={classes.list}>
      {items.map(Workplace)}
    </ul>
  );
}
