import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import I18NextHttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).use(I18NextHttpBackend).use(initReactI18next); // passes i18n down to react-i18next

export default i18n;
