import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';

const App = () => {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState('education');

  const handleLangChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <header>
        <h1>{t('welcome')}</h1>
        <div>
          <button onClick={() => handleLangChange('es')}>ES</button>
          <button onClick={() => handleLangChange('en')}>EN</button>
          <button onClick={() => handleLangChange('de')}>DE</button>
        </div>
        <nav>
          <button onClick={() => setActiveTab('education')}>{t('education')}</button>
          <button onClick={() => setActiveTab('solidarity')}>{t('solidarity')}</button>
          <button onClick={() => setActiveTab('actions')}>{t('actions')}</button>
        </nav>
      </header>
      <main>
        {activeTab === 'education' && <div>{t('education')}</div>}
        {activeTab === 'solidarity' && <div>{t('solidarity')}</div>}
        {activeTab === 'actions' && <div>{t('actions')}</div>}
      </main>
    </div>
  );
};

export default App;
