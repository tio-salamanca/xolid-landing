import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import es from './locales/es.json';
import de from './locales/de.json';
import en from './locales/en.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
      de: { translation: de },
      en: { translation: en }
    },
    lng: "es",         // Idioma inicial
    fallbackLng: "es", // Idioma por defecto si falta traducción
    interpolation: { escapeValue: false }
  });

export default i18n;
