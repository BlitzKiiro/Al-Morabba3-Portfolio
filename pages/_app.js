import "../styles/globals.css";
import ThemeContextProvider from "../context/ThemeContext";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
      <Script src='/assets/scripts/smooth-scroll.js' />
    </ThemeContextProvider>
  );
}
