import React from 'react';
import { useTranslation } from 'react-i18next';

const XolidBalanceCard = ({ balance }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 mb-6 transform transition hover:scale-105">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">{t('balance.title')}</h2>
        <span className="text-2xl font-bold text-green-600">{balance} XOL</span>
      </div>
      <div className="mt-4">
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div 
            className="bg-gradient-to-r from-green-400 to-blue-500 h-4 rounded-full" 
            style={{ width: `${Math.min(100, (balance / 2000) * 100)}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-500 mt-2">{t('balance.accumulate')}</p>
      </div>
    </div>
  );
};

export default XolidBalanceCard;

