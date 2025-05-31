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

const tabs = [
  { id: 'education', label: '🎓 Educación' },
  { id: 'solidarity', label: '🌍 Solidaridad' },
  { id: 'actions', label: '⛏️ Mis Acciones' }
];

const App = () => {
  const [currentUser, setCurrentUser] = useState(users[0]);
  const [activeTab, setActiveTab] = useState('education');

  const handleCompleteAction = (action) => {
    const newAction = {
      ...action,
      type: action.xolidReward ? 'course' : 'donation',
      date: new Date().toISOString().split('T')[0],
      xolid: action.xolidReward,
    };
    const updatedUser = {
      ...currentUser,
      xolid: currentUser.xolid + action.xolidReward,
      actions: [newAction, ...currentUser.actions],
    };
    setCurrentUser(updatedUser);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <XolidHeader />
      <main className="container mx-auto px-4 py-8">
        <XolidBalanceCard balance={currentUser.xolid} />
        <XolidTabNavigation tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === 'education' && (
          <XolidSection title="Aprende y gana XOLID" description="Completa cursos y quizzes para acumular tokens">
            {courses.map((course) => (
              <XolidOpportunityCard key={course.id} opportunity={course} onAction={handleCompleteAction} />
            ))}
          </XolidSection>
        )}
        {activeTab === 'solidarity' && (
          <XolidSection title="Acciones Solidarias" description="Participa en causas sociales y gana recompensas">
            {causes.map((cause) => (
              <XolidOpportunityCard key={cause.id} opportunity={cause} onAction={handleCompleteAction} />
            ))}
          </XolidSection>
        )}
        {activeTab === 'actions' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Tu Historial de Acciones</h2>
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
