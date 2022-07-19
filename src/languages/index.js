import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import pt from './pt.json';
import en from './en.json';

i18next.use(initReactI18next).init(
  {
    compatibilityJSON: 'v3',
    initImmediate: false,
    preload: ["pt", "en"],
    fallbackLng: "pt",
    resources: {
      pt: { translation: pt },
      en: { translation: en },

    }
})

export default i18next;