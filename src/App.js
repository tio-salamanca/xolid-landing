import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import users from './mock/users';
import courses from './mock/courses';
import causes from './mock/causes';
import XolidHeader from './components/XolidHeader';
import XolidBalanceCard from './components/XolidBalanceCard';
import XolidActionCard from './components/XolidActionCard';
import XolidSection from './components/XolidSection';
import XolidOpportunityCard from './components/XolidOpportunityCard';
import XolidTabNavigation from './components/XolidTabNavigation';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  return (
    <div className="flex gap-2 justify-end mb-4">
      <button onClick={() => i18n.changeLanguage('es')} className="px-2 py-1 bg-gray-200 rounded">ES</button>
      <button onClick={() => i18n.changeLanguage('en')} className="px-2 py-1 bg-gray-200 rounded">EN</button>
      <button onClick={() => i18n.changeLanguage('de')} className="px-2 py-1 bg-gray-200 rounded">DE</button>
    </div>
  );
};

const App = () => {
  const { t } = useTranslation();
  const [currentUser, setCurrentUser] = useState(users[0]);
  const [activeTab, setActiveTab] = useState('education');

  const tabs = [
    { id: 'education', label: `🎓 ${t('education')}` },
    { id: 'solidarity', label: `🌍 ${t('solidarity')}` },
    { id: 'actions', label: `⛏️ ${t('actions')}` }
  ];

  const handleCompleteAction = (action) => {
    const newAction = {
      ...action,
      type: action.xolidReward ? 'course' : 'donation',
      date: new Date().toISOString().split('T')[0],
      xolid: action.xolidReward
    };

    const updatedUser = {
      ...currentUser,
      xolid: currentUser.xolid + action.xolidReward,
      actions: [newAction, ...currentUser.actions]
    };

    setCurrentUser(updatedUser);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <LanguageSelector />
      <XolidHeader />
      <main className="container mx-auto px-4 py-8">
        <XolidBalanceCard balance={currentUser.xolid} label={t('balance')} />
        <XolidTabNavigation tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === 'education' && (
          <XolidSection
            title={t('learn_and_earn')}
            description={t('complete_courses')}
          >
            {courses.map((course) => (
              <XolidOpportunityCard
                key={course.id}
                opportunity={course}
                onAction={handleCompleteAction}
              />
            ))}
          </XolidSection>
        )}
        {activeTab === 'solidarity' && (
          <XolidSection
            title={t('solidarity_actions')}
            description={t('join_causes')}
          >
            {causes.map((cause) => (
              <XolidOpportunityCard
                key={cause.id}
                opportunity={cause}
                onAction={handleCompleteAction}
              />
            ))}
          </XolidSection>
        )}
        {activeTab === 'actions' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('history')}</h2>
            {currentUser.actions.map((action, index) => (
              <XolidActionCard key={index} action={action} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
