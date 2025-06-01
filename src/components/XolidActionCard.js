import React from "react";

const XolidActionCard = ({ action }) => (
  <div className="bg-white shadow rounded-lg p-4 flex justify-between mb-2">
    <div>
      <div className="font-semibold">{action.title}</div>
      <div className="text-xs text-gray-500">{action.date}</div>
    </div>
    <div className="text-blue-600 font-bold">+{action.xolid} XOLID</div>
  </div>
);

export default XolidActionCard;
