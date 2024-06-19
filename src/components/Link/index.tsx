import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { ReactNode } from 'react';
import { cx } from '@/utils/utils';
import classes from './classes.module.css';

type LinkProps = {
  children: ReactNode;
  className?: string;
  underline?: boolean;
} & NextLinkProps;

export const Link = ({
  href, className = '', children, underline = false, ...rest
}: LinkProps) => {
  const isExternal = !href.toString().startsWith('/');
  const additionalClass = (isExternal || underline) ? classes.underline : '';
  return (
    <NextLink
      {...rest}
      className={cx(
        classes.link,
        additionalClass,
        className,
      )}
      target={isExternal ? '_blank' : undefined}
      href={href}
    >
      {children}
    </NextLink>
  );
};

Link.defaultProps = {
  underline: false,
  className: '',
};
