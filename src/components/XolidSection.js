import React from 'react';

const XolidSection = ({ title, description, children }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
    <p className="mb-4 text-gray-600">{description}</p>
    {children}
  </section>
);

export default XolidSection;
