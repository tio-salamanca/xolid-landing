import React from "react";

const XolidTabNavigation = ({ tabs, activeTab, setActiveTab }) => (
  <nav className="flex gap-4 mt-6 mb-8">
    {tabs.map((tab) => (
      <button
        key={tab.id}
        onClick={() => setActiveTab(tab.id)}
        className={`py-2 px-4 rounded font-semibold ${
          activeTab === tab.id
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-gray-700 hover:bg-blue-100"
        }`}
      >
        {tab.label}
      </button>
    ))}
  </nav>
);

export default XolidTabNavigation;
