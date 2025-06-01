import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    resources: {
      es: {
        translation: {
          welcome: "¡Bienvenido a Xolid!",
          education: "Educación",
          solidarity: "Solidaridad",
          actions: "Mis Acciones",
          language: "Idioma",
        }
      },
      en: {
        translation: {
          welcome: "Welcome to Xolid!",
          education: "Education",
          solidarity: "Solidarity",
          actions: "My Actions",
          language: "Language",
        }
      },
      de: {
        translation: {
          welcome: "Willkommen bei Xolid!",
          education: "Bildung",
          solidarity: "Solidarität",
          actions: "Meine Aktionen",
          language: "Sprache",
        }
      }
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
