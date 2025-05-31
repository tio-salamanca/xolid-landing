import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const XolidHeader = () => {
  const { t } = useTranslation();

  return (
    <header className="bg-gradient-to-r from-green-500 to-blue-600 p-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">{t('header.title')}</h1>
        <div className="flex items-center space-x-4">
          <span className="text-white font-medium">{t('header.subtitle')}</span>
          <div className="bg-white text-green-600 px-4 py-2 rounded-full font-bold">
            🌱 {t('header.mining')}
          </div>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default XolidHeader;

