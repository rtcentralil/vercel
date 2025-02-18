// pages/_app.js
import '../styles/globals.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useScrollAnimation } from '../utils/scrollObserver';

function MyApp({ Component, pageProps }) {
  // Initialize the scroll animation observer globally.
  useScrollAnimation();

  return <Component {...pageProps} />;
}

export default MyApp;