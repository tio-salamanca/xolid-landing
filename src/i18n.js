import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        translation: {
          welcome: "¡Bienvenido a Xolid!",
          education: "Educación",
          solidarity: "Solidaridad",
          actions: "Mis Acciones",
          // ...agrega más claves/valores según tus necesidades
        },
      },
      en: {
        translation: {
          welcome: "Welcome to Xolid!",
          education: "Education",
          solidarity: "Solidarity",
          actions: "My Actions",
          // ...agrega más claves/valores según tus necesidades
        },
      },
      de: {
        translation: {
          welcome: "Willkommen bei Xolid!",
          education: "Bildung",
          solidarity: "Solidarität",
          actions: "Meine Aktionen",
          // ...agrega más claves/valores según tus necesidades
        },
      },
    },
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
