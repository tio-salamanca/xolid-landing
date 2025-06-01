import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';
import users from './mock/users';
import courses from './mock/courses';
import causes from './mock/causes';
import XolidHeader from './components/XolidHeader';
import XolidBalanceCard from './components/XolidBalanceCard';
import XolidActionCard from './components/XolidActionCard';
import XolidSection from './components/XolidSection';
import XolidOpportunityCard from './components/XolidOpportunityCard';
import XolidTabNavigation from './components/XolidTabNavigation';
import RegisterForm from './components/RegisterForm';

const App = () => {
  const { t } = useTranslation();
  const [currentUser, setCurrentUser] = useState(users[0]);
  const [registered, setRegistered] = useState(false);
  const [activeTab, setActiveTab] = useState('register');

  const tabs = [
    { id: 'education', label: t('education') },
    { id: 'solidarity', label: t('solidarity') },
    { id: 'actions', label: t('actions') }
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

  // Llamado después de registro exitoso
  const handleRegisterSuccess = (email, wallet) => {
    setRegistered(true);
    setActiveTab('education');
    setCurrentUser({
      ...currentUser,
      email,
      wallet
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <XolidHeader />
      <main className="container mx-auto px-4 py-8">
        {!registered ? (
          <RegisterForm onRegisterSuccess={handleRegisterSuccess} />
        ) : (
          <>
            <XolidBalanceCard balance={currentUser.xolid} />
            <XolidTabNavigation
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            {activeTab === 'education' && (
              <XolidSection
                title={t("learn_and_earn")}
                description={t("complete_courses")}
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
                title={t("solidarity_actions")}
                description={t("join_causes")}
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
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{t("history")}</h2>
                {currentUser.actions.map((action, index) => (
                  <XolidActionCard key={index} action={action} />
                ))}
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default App;
