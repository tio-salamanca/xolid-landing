import React from 'react';

const XolidActionCard = ({ action }) => {
  const getIcon = () => {
    switch(action.type) {
      case 'course': return '📚';
      case 'donation': return '❤️';
      case 'quiz': return '🧠';
      case 'volunteer': return '👐';
      default: return '✨';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-3 border-l-4 border-green-500 hover:shadow-md transition">
      <div className="flex items-start">
        <span className="text-2xl mr-3">{getIcon()}</span>
        <div className="flex-1">
          <h3 className="font-medium text-gray-800">{action.title || action.cause || action.organization}</h3>
          <p className="text-sm text-gray-500">{new Date(action.date).toLocaleDateString()}</p>
        </div>
        <span className="text-green-600 font-bold">+{action.xolid} XOL</span>
      </div>
    </div>
  );
};

export default XolidActionCard;
