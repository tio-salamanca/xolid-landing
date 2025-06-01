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
  { id: 'actions', label: '⛏️ Mis Acciones' },
  { id: 'feedback', label: '📝 Sugerencias' },
];

const App = () => {
  const [currentUser, setCurrentUser] = useState(users[0]);
  const [activeTab, setActiveTab] = useState('education');
  const [suggestion, setSuggestion] = useState('');

  // Acción cuando usuario completa algo
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

  // Envío de sugerencias
  const handleSuggestionSubmit = (e) => {
    e.preventDefault();
    alert(`¡Gracias por tu sugerencia!\n\n${suggestion}`);
    setSuggestion('');
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
            <div className="mt-6">
              <button
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow"
                onClick={() => alert('¡Gracias por apoyar una causa!')}
              >
                Nueva Acción Solidaria
              </button>
            </div>
          </XolidSection>
        )}

        {activeTab === 'actions' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Tu Historial de Acciones</h2>
            {currentUser.actions.length === 0 ? (
              <p className="text-gray-600">No has realizado acciones todavía.</p>
            ) : (
              currentUser.actions.map((action, index) => (
                <XolidActionCard key={index} action={action} />
              ))
            )}
          </div>
        )}

        {activeTab === 'feedback' && (
          <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Déjanos tu sugerencia</h2>
            <form onSubmit={handleSuggestionSubmit}>
              <textarea
                className="w-full border rounded p-2 mb-4"
                rows={5}
                placeholder="¿Qué mejorarías en la plataforma?"
                value={suggestion}
                onChange={(e) => setSuggestion(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                Enviar sugerencia
              </button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
