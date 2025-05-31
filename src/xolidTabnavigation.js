import React, { useState } from 'react';

const XolidTabNavigation = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="flex border-b border-gray-200 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-4 py-2 font-medium text-sm focus:outline-none ${
            activeTab === tab.id
              ? 'border-b-2 border-green-500 text-green-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default XolidTabNavigation;
