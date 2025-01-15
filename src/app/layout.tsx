import '../styles/main.css';
import '../styles/prism.css';
import { ReactNode } from 'react';
import Script from 'next/script';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import localFont from 'next/font/local';
import { GoogleAnalytics } from '@next/third-parties/google';
import * as gtag from '@utils/gtag';
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
  keywords: 'JavaScript, React, Vue.js, Angular, TypeScript, HTML, CSS, Web Development, Frontend Development, Programming, Coding, Frameworks, Libraries, APIs, Debugging, Optimization, Performance, Testing, Deployment, DevOps, CI/CD, Version Control, Git, NPM, Yarn, Babel, Webpack, Rollup, Parcel, Vite, Next.js, Nuxt.js, Svelte, Astro, SolidJS, Remix Run, Redux, MobX, RxJS, GraphQL, REST API, Axios, Fetch API, HTTP Requests, CORS, WebSocket, JSON, AJAX, SPA, PWA, Progressive Web Apps, Microfrontends, Monorepos, Lerna, Turbopack, Storybook, Cypress, Jest, Playwright, WebAssembly, Deno',
  openGraph: {
    title: 'Блог разработчика Кирилла Павловского',
    description: 'Блог о фронтенд разработке, и других технологиях',
    type: 'website',
    url: 'https://www.kirill-pavlovskii.ru',
    images: [
      {
        url: 'https://www.kirill-pavlovskii.ru/_next/image?url=%2Fimages%2Fother%2Flogo.jpg&w=128&q=75',
        width: 128,
        height: 192,
        alt: 'Логотип сайта',
      },
    ],
  },
};

const DynamicHeader = dynamic(() => import('../components/Header'), {
  ssr: false,
});

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
        <DynamicHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
