import React from "react";
import { useTranslation } from "react-i18next";

const XolidHeader = () => {
  const { t } = useTranslation();
  return (
    <header className="py-6 px-4 bg-blue-700 text-white">
      <h1 className="text-3xl font-bold">{t("welcome")}</h1>
    </header>
  );
};
export default XolidHeader;
