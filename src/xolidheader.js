import React from 'react';

const XolidHeader = () => {
  return (
    <header className="bg-gradient-to-r from-green-500 to-blue-600 p-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">XOLID</h1>
        <div className="flex items-center space-x-4">
          <span className="text-white font-medium">Tokens por Acciones Solidarias</span>
          <div className="bg-white text-green-600 px-4 py-2 rounded-full font-bold">
            🌱 Minería Humana
          </div>
        </div>
      </div>
    </header>
  );
};

export default XolidHeader;
