import '../styles/main.css';
import '../styles/prism.css';
import { ReactNode } from 'react';
import Script from 'next/script';
import { Metadata } from 'next';
import localFont from 'next/font/local';
import { GoogleAnalytics } from '@next/third-parties/google';
import * as gtag from '@utils/gtag';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface IRootLayoutProps {
  children: ReactNode;
}

const tildaSans = localFont({
  src: '../../public/tildaSansRegular.woff2',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Главная',
  description: 'Блог Кирилла Павловского',
};

/** Общая обертка над всеми страницами. */
function RootLayout({ children }: IRootLayoutProps) {
  return (
    <html lang="ru">
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
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID as string} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
