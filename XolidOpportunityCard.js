import React from 'react';

const XolidOpportunityCard = ({ opportunity, onAction }) => {
  const getButtonText = () => {
    if (opportunity.completed !== undefined) {
      return opportunity.completed ? 'Completado' : 'Comenzar';
    }
    return 'Participar';
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition">
      <div className="p-5">
        <h3 className="font-semibold text-lg text-gray-800 mb-2">{opportunity.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{opportunity.description || `Duración: ${opportunity.duration}`}</p>
        <div className="flex justify-between items-center">
          <span className="text-green-600 font-bold">+{opportunity.xolidReward} XOL</span>
          <button 
            onClick={() => onAction(opportunity)}
            disabled={opportunity.completed}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              opportunity.completed 
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                : 'bg-green-100 text-green-700 hover:bg-green-200'
            }`}
          >
            {getButtonText()}
          </button>
        </div>
      </div>
    </div>
  );
};

export default XolidOpportunityCard;
