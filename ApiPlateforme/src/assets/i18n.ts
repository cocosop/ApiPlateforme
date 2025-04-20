import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import fr from './translations/fr.json';
import en from './translations/en.json';
import es from './translations/es.json';
import zh from './translations/zh.json';
import ar from './translations/ar.json';

i18n
  .use(LanguageDetector) // détecte la langue du navigateur
  .use(initReactI18next) // connecte i18n à React
  .init({
    resources: {
      fr: { translation: fr },
      en: { translation: en },
      es: { translation: es },
      zh: { translation: zh },
      ar: { translation: ar },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
