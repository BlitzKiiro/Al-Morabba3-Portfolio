import "../styles/globals.css";
import "../styles/cssloaders.css";
import { useEffect } from "react";
import ThemeContextProvider from "../context/ThemeContext";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import Footer from "../components/layout/footer";
import Navbar from "../components/layout/navbar";
import LoadingScreen from "../components/loading screen/LoadingScreen";
import "aos/dist/aos.css";
import Aos from "aos";
import { typingAnimation, splashAnimation } from "../animations";
import i18n from "../configs/i18next";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init();

    // .then(() => {
    //   typingAnimation();
    // });

    //i18next translations
    localStorage.removeItem("i18nextLng");
    i18n.init({
      interpolation: {
        escapeValue: false,
      },
    });

    i18n.on("languageChanged", (lng) => {
      document.dir = i18n.dir(lng);
      console.log(lng, i18n.dir(lng));
    });
    splashAnimation();
  });
  return (
    <ThemeContextProvider>
      <LoadingScreen />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <Analytics />
      <Script src='/assets/scripts/smooth-scroll.js' />
    </ThemeContextProvider>
  );
}
