import React from "react";

const XolidBalanceCard = ({ balance }) => (
  <div className="bg-white shadow rounded-lg p-6 mb-6 flex items-center justify-between">
    <span className="text-xl font-medium">XOLID</span>
    <span className="text-3xl font-bold text-blue-600">{balance}</span>
  </div>
);

export default XolidBalanceCard;
