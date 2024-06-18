'use client';

import React, { FC, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '@utils/gtag';

interface IProps {
  children: ReactNode,
}

const Gtag: FC<IProps> = ({ children }) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return (
    <div>{children}</div>
  );
};

export default Gtag;
