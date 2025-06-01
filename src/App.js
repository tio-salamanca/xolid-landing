import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./i18n";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChsWHZ-0cnGT303T1zfW1XQ052YL4yj2k",
  authDomain: "xolid-13eca.firebaseapp.com",
  projectId: "xolid-13eca",
  storageBucket: "xolid-13eca.appspot.com",
  messagingSenderId: "23116860361",
  appId: "1:23116860361:web:e11a826523482afd4406dc",
  measurementId: "G-3GJZMNYP4N"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const App = () => {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState("education");
  const [form, setForm] = useState({ email: "", wallet: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "users"), {
      email: form.email,
      wallet: form.wallet,
      createdAt: new Date()
    });
    setSubmitted(true);
  };

  const tabs = [
    { id: "education", label: t("education") },
    { id: "solidarity", label: t("solidarity") },
    { id: "actions", label: t("actions") }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
        <button onClick={() => i18n.changeLanguage("es")}>ES</button>
        <button onClick={() => i18n.changeLanguage("en")}>EN</button>
        <button onClick={() => i18n.changeLanguage("de")}>DE</button>
      </div>

      <h1 className="text-3xl font-bold mb-2">{t("welcome")}</h1>

      {!submitted ? (
        <form onSubmit={handleRegister} style={{ marginBottom: 24 }}>
          <input
            type="email"
            name="email"
            placeholder={t("email")}
            value={form.email}
            onChange={handleInput}
            required
            style={{ marginRight: 8 }}
          />
          <input
            type="text"
            name="wallet"
            placeholder={t("wallet")}
            value={form.wallet}
            onChange={handleInput}
            required
            style={{ marginRight: 8 }}
          />
          <button type="submit">{t("register")}</button>
        </form>
      ) : (
        <div style={{ marginBottom: 24, color: "green" }}>{t("registered_success")}</div>
      )}

      <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              fontWeight: activeTab === tab.id ? "bold" : "normal"
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div>
        {activeTab === "education" && <div>{t("learn_and_earn")}</div>}
        {activeTab === "solidarity" && <div>{t("solidarity_actions")}</div>}
        {activeTab === "actions" && <div>{t("history")}</div>}
      </div>
    </div>
  );
};

export default App;
