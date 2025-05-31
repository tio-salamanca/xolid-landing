import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className="flex gap-2 ml-4">
      <button onClick={() => i18n.changeLanguage('es')}>ES</button>
      <button onClick={() => i18n.changeLanguage('de')}>DE</button>
      <button onClick={() => i18n.changeLanguage('en')}>EN</button>
    </div>
  );
};

export default LanguageSwitcher;
