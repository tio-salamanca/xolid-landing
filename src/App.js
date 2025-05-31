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

const App = () => {
  const { t } = useTranslation();
  const [currentUser, setCurrentUser] = useState(users[0]);
  const [activeTab, setActiveTab] = useState('education');

  const tabs = [
    { id: 'education', label: `🎓 ${t('tabs.education')}` },
    { id: 'solidarity', label: `🌍 ${t('tabs.solidarity')}` },
    { id: 'actions', label: `⛏️ ${t('tabs.actions')}` }
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
      <XolidHeader />

      <main className="container mx-auto px-4 py-8">
        <XolidBalanceCard balance={currentUser.xolid} />

        <XolidTabNavigation tabs
