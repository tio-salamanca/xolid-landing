import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./i18n";
import users from "./mock/users";
import courses from "./mock/courses";
import causes from "./mock/causes";

import XolidHeader from "./components/XolidHeader";
import XolidBalanceCard from "./components/XolidBalanceCard";
import XolidTabNavigation from "./components/XolidTabNavigation";
import XolidSection from "./components/XolidSection";
import XolidOpportunityCard from "./components/XolidOpportunityCard";
import XolidActionCard from "./components/XolidActionCard";

const App = () => {
  const { t, i18n } = useTranslation();
  const [currentUser, setCurrentUser] = useState(users[0]);
  const [activeTab, setActiveTab] = useState("education");

  const handleCompleteAction = (action) => {
    const newAction = {
      ...action,
      type: action.xolidReward ? "course" : "donation",
      date: new Date().toISOString().split("T")[0],
      xolid: action.xolidReward,
    };
    const updatedUser = {
      ...currentUser,
      xolid: currentUser.xolid + action.xolidReward,
      actions: [newAction, ...currentUser.actions],
    };
    setCurrentUser(updatedUser);
  };

  const tabs = [
    { id: "education", label: t("education") },
    { id: "solidarity", label: t("solidarity") },
    { id: "actions", label: t("actions") },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <XolidHeader />
      <div className="flex justify-end p-4">
        <select
          value={i18n.language}
          onChange={(e) => i18n.changeLanguage(e.target.value)}
          className="border rounded p-2"
        >
          <option value="es">ES</option>
          <option value="en">EN</option>
          <option value="de">DE</option>
        </select>
      </div>
      <main className="container mx-auto px-4 py-8">
        <XolidBalanceCard balance={currentUser.xolid} />
        <XolidTabNavigation
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        {activeTab === "education" && (
          <XolidSection
            title={t("learn_and_earn")}
            description={t("complete_courses")}
          >
            {courses.map((course) => (
              <XolidOpportunityCard
                key={course.id}
                opportunity={course}
                onAction={handleCompleteAction}
              />
            ))}
          </XolidSection>
        )}
        {activeTab === "solidarity" && (
          <XolidSection
            title={t("solidary_actions")}
            description={t("join_causes")}
          >
            {causes.map((cause) => (
              <XolidOpportunityCard
                key={cause.id}
                opportunity={cause}
                onAction={handleCompleteAction}
              />
            ))}
          </XolidSection>
        )}
        {activeTab === "actions" && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {t("your_actions_history")}
            </h2>
            {currentUser.actions.map((action, index) => (
              <XolidActionCard key={index} action={action} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
