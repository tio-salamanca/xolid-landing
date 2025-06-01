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
          balance: "Saldo XOLID",
          learn_and_earn: "Aprende y gana XOLID",
          solidarity_actions: "Acciones Solidarias",
          history: "Tu Historial de Acciones",
          participate: "Participa en causas sociales y gana recompensas",
          complete_courses: "Completa cursos y quizzes para acumular tokens"
        }
      },
      en: {
        translation: {
          welcome: "Welcome to Xolid!",
          education: "Education",
          solidarity: "Solidarity",
          actions: "My Actions",
          balance: "XOLID Balance",
          learn_and_earn: "Learn and earn XOLID",
          solidarity_actions: "Solidarity Actions",
          history: "Your Action History",
          participate: "Participate in social causes and earn rewards",
          complete_courses: "Complete courses and quizzes to earn tokens"
        }
      },
      de: {
        translation: {
          welcome: "Willkommen bei Xolid!",
          education: "Bildung",
          solidarity: "Solidarität",
          actions: "Meine Aktionen",
          balance: "XOLID Saldo",
          learn_and_earn: "Lerne und verdiene XOLID",
          solidarity_actions: "Solidarische Aktionen",
          history: "Dein Aktionsverlauf",
          participate: "Nimm an sozialen Aktionen teil und erhalte Belohnungen",
          complete_courses: "Absolviere Kurse und Quiz, um Tokens zu verdienen"
        }
      }
    },
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
