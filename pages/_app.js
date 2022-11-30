import { RedditProvider } from "../context/RedditContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <RedditProvider>
      <Component {...pageProps} />
    </RedditProvider>
  );
}

export default MyApp;
