import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "es",
    interpolation: {
      escapeValue: false
    },
    resources: {
      es: {
        translation: {
          welcome: "¡Bienvenido a Xolid!",
          education: "Educación",
          solidarity: "Solidaridad",
          actions: "Mis Acciones",
          learn_and_earn: "Aprende y gana XOLID",
          complete_courses: "Completa cursos y quizzes para acumular tokens",
          solidary_actions: "Acciones Solidarias",
          join_causes: "Participa en causas sociales y gana recompensas",
          your_actions_history: "Tu Historial de Acciones"
        }
      },
      en: {
        translation: {
          welcome: "Welcome to Xolid!",
          education: "Education",
          solidarity: "Solidarity",
          actions: "My Actions",
          learn_and_earn: "Learn and earn XOLID",
          complete_courses: "Complete courses and quizzes to earn tokens",
          solidary_actions: "Solidary Actions",
          join_causes: "Join social causes and earn rewards",
          your_actions_history: "Your Actions History"
        }
      },
      de: {
        translation: {
          welcome: "Willkommen bei Xolid!",
          education: "Bildung",
          solidarity: "Solidarität",
          actions: "Meine Aktionen",
          learn_and_earn: "Lerne und verdiene XOLID",
          complete_courses: "Absolviere Kurse und Quizze, um Token zu sammeln",
          solidary_actions: "Solidarische Aktionen",
          join_causes: "Nimm an sozialen Aktionen teil und verdiene Belohnungen",
          your_actions_history: "Deine Aktionshistorie"
        }
      }
    }
  });

export default i18n;
