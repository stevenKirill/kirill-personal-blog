import '../styles/main.css';
import { Header } from '../components/Header/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <main className="container">
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
