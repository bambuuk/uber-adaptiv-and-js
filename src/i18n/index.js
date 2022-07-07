import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import translationUA from './ua';
import translationRU from './ru';

const resources = {
  ua: {
    translation: translationUA
  },
  ru: {
    translation: translationRU
  }
};

i18next
  .use(LanguageDetector)
  .use(initReactI18next) 
  .init({
    resources,
    lng: 'ua',
    fallbackLng: 'ua',
    whitelist: ['ua', 'ru'],
    detection: {
      order: ['localStorage', 'cookie'],
      caches: ['localStorage', 'cookie'],
    }, 

    interpolation: {
      escapeValue: false 
    }
  });

export default i18next;
