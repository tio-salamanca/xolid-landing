import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div style={{ display: 'flex', gap: '8px', marginBottom: '1rem' }}>
      <button onClick={() => changeLanguage('es')}>🇪🇸 Español</button>
      <button onClick={() => changeLanguage('en')}>🇬🇧 English</button>
      <button onClick={() => changeLanguage('de')}>🇩🇪 Deutsch</button>
    </div>
  );
};

export default LanguageSwitcher;
