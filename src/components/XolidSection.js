import React from "react";

const XolidSection = ({ title, description, children }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-2">{title}</h2>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="grid gap-4 md:grid-cols-2">{children}</div>
  </section>
);

export default XolidSection;
