import React from "react";

const XolidOpportunityCard = ({ opportunity, onAction }) => (
  <div className="bg-white shadow rounded-lg p-4 flex flex-col justify-between">
    <div>
      <h3 className="font-bold text-lg">{opportunity.title}</h3>
      <p className="text-gray-700">{opportunity.description}</p>
    </div>
    <button
      onClick={() => onAction(opportunity)}
      className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      +{opportunity.xolidReward} XOLID
    </button>
  </div>
);

export default XolidOpportunityCard;
