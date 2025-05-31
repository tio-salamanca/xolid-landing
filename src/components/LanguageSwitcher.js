import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className="flex gap-2 ml-4">
      <button
        className={`px-2 py-1 rounded ${i18n.language === 'es' ? 'bg-green-500 text-white' : 'bg-white text-green-700 border'}`}
        onClick={() => i18n.changeLanguage('es')}
      >
        ES
      </button>
      <button
        className={`px-2 py-1 rounded ${i18n.language === 'de' ? 'bg-green-500 text-white' : 'bg-white text-green-700 border'}`}
        onClick={() => i18n.changeLanguage('de')}
      >
        DE
      </button>
      <button
        className={`px-2 py-1 rounded ${i18n.language === 'en' ? 'bg-green-500 text-white' : 'bg-white text-green-700 border'}`}
        onClick={() => i18n.changeLanguage('en')}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
