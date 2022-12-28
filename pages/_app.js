import "../styles/globals.css";
import ThemeContextProvider from "../context/ThemeContext";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
      <Analytics />
      <Script src='/assets/scripts/smooth-scroll.js' />
    </ThemeContextProvider>
  );
}
