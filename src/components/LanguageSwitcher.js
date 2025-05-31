import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'es', label: 'ES' },
    { code: 'de', label: 'DE' },
    { code: 'en', label: 'EN' }
  ];

  return (
    <div className="flex gap-2 ml-4">
      {languages.map((lang) => (
        <button
          key={lang.code}
          className={`px-2 py-1 rounded transition 
            ${i18n.language === lang.code 
              ? 'bg-green-500 text-white font-bold shadow' 
              : 'bg-white text-green-700 border border-green-500 hover:bg-green-100'}`}
          onClick={() => i18n.changeLanguage(lang.code)}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
