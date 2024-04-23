import '../styles/main.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ReactNode, useEffect } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';
import Head from 'next/head';
import { Metadata } from 'next';
import localFont from 'next/font/local'

interface IRootLayoutProps {
  children: ReactNode;
}

const tildaSans = localFont({
  src: "../public/tildaSansRegular.woff2",
  display: "swap",
});

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
      <Script id="theme-switcher" strategy="afterInteractive">
        {`if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }`}
      </Script>
      <body className={tildaSans.className}>
        <Header/>
          {children}
        <Footer/>
       </body>
    </html>
  )
};

export default RootLayout;
