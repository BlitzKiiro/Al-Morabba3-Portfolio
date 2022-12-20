import "../styles/globals.css";
import ThemeContextProvider from "../context/ThemeContext";

export default function App({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
}
