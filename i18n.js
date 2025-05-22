import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import Backend from 'i18next-http-backend';

// Initialize i18next
i18n
    .use(I18nextBrowserLanguageDetector)
    .use(Backend)
    .use(initReactI18next)
    .init({
        fallbackLng: 'es',
        debug: process.env.NODE_ENV === 'development',
        ns: ['common'],
        defaultNS: 'common',
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
