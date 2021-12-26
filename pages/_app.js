import '../styles/main.css';
import { Header } from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

/** Общая обертка над всеми страницами. */
function MyApp({ Component, pageProps }) {
  return (
    <div className={`${pageProps.pageName !== 'ABOUT' 
    && pageProps.pageName !== 'BLOG_PAGE' ? 'main_container' : ''}`}>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  )
}

export default MyApp
