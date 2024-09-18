/* eslint-disable react/require-default-props */

import Image, { StaticImageData } from 'next/image';
import { Link } from '../Link';
import classes from './classes.module.css';

type TProject = {
  name: string;
  description: string;
  imageSrc: string | StaticImageData;
  href?: string;
};

function Project({
  name, imageSrc, href = '', description,
}: TProject) {
  const content = (
    <div className={classes.work}>
      <Image
        src={imageSrc}
        alt={name}
        width={48}
        height={48}
        className={classes.rounded}
      />
      <div className={classes.companyWrapper}>
        <p className={href ? 'external-arrow' : ''}>{name}</p>
        <p>{description}</p>
      </div>
    </div>
  );
  return (
    <li className={classes.transition} key={name}>
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

export default function Projects({ items }: { items: TProject[] }) {
  return (
    <ul className={classes.list}>
      {items.map(Project)}
    </ul>
  );
}
