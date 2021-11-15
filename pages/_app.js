import '../styles/main.css';
import { Header } from '../components/Header/Header';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header/>
      <main className="container">
        <Component {...pageProps} />
      </main>
    </div>
  )
}

export default MyApp
