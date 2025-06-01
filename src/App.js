import React, { useState } from 'react';
import users from './mock/users';
import courses from './mock/courses';
import causes from './mock/causes';
import XolidHeader from './components/XolidHeader';
import XolidBalanceCard from './components/XolidBalanceCard';
import XolidActionCard from './components/XolidActionCard';
import XolidSection from './components/XolidSection';
import XolidOpportunityCard from './components/XolidOpportunityCard';
import XolidTabNavigation from './components/XolidTabNavigation';
import LanguageSwitcher from './components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const App = () => {
  const [currentUser, setCurrentUser] = useState(users[0]);
  const [activeTab, setActiveTab] = useState('education');
  const { t } = useTranslation();

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

  const tabs = [
    { id: 'education', label: `🎓 ${t('education')}` },
    { id: 'solidarity', label: `🌍 ${t('solidarity')}` },
    { id: 'actions', label: `⛏️ ${t('actions')}` }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <LanguageSwitcher />
      <XolidHeader />
      <main className="container mx-auto px-4 py-8">
        <XolidBalanceCard balance={currentUser.xolid} title={t('balance')} />
        <XolidTabNavigation tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === 'education' && (
          <XolidSection title={t('learn_and_earn')} description={t('complete_courses')}>
            {courses.map((course) => (
              <XolidOpportunityCard key={course.id} opportunity={course} onAction={handleCompleteAction} />
            ))}
          </XolidSection>
        )}
        {activeTab === 'solidarity' && (
          <XolidSection title={t('solidarity_actions')} description={t('participate')}>
            {causes.map((cause) => (
              <XolidOpportunityCard key={cause.id} opportunity={cause} onAction={handleCompleteAction} />
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
