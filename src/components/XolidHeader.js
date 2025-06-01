import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const XolidHeader = () => {
  const { t } = useTranslation();
  return (
    <header className="bg-white shadow py-4 px-6 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-gray-800">{t('welcome')}</h1>
      <LanguageSwitcher />
    </header>
  );
};

export default XolidHeader;
