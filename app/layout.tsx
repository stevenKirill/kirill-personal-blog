import '../styles/main.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ReactNode, useEffect } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';
import Head from 'next/head';
import { Metadata } from 'next';

interface IRootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: 'RootLayout',
  description: 'description',
}

/** Общая обертка над всеми страницами. */
function RootLayout({ children }: IRootLayoutProps) {
  // const router = useRouter();
  // useEffect(() => {
  //   const handleRouteChange = (url) => {
  //     gtag.pageview(url);
  //   };
  //   router.events.on('routeChangeComplete', handleRouteChange);
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange);
  //   }
  // }, [router.events]);

  return (
    <html>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      {/* <div className={`${pageProps.pageName !== 'ABOUT'
      && pageProps.pageName !== 'BLOG_PAGE' ? 'main_container' : ''}`}> */}
        <body>
          <Header/>
            {children}
          <Footer/>
        </body>
      {/* </div> */}
    </html>
  )
};

export default RootLayout;
