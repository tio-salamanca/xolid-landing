import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { useTranslation } from "react-i18next";

const RegisterForm = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [wallet, setWallet] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const emailQuery = query(collection(db, "users"), where("email", "==", email));
      const emailSnapshot = await getDocs(emailQuery);

      const walletQuery = query(collection(db, "users"), where("wallet", "==", wallet));
      const walletSnapshot = await getDocs(walletQuery);

      if (!emailSnapshot.empty) {
        setMessage(t("email_already_registered"));
        setLoading(false);
        return;
      }
      if (!walletSnapshot.empty) {
        setMessage(t("wallet_already_registered"));
        setLoading(false);
        return;
      }

      await addDoc(collection(db, "users"), {
        email,
        wallet,
        createdAt: new Date()
      });

      setMessage(t("register_success"));
      setEmail("");
      setWallet("");
    } catch (error) {
      setMessage(t("register_error"));
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleRegister} style={{ maxWidth: 400, margin: "2rem auto" }}>
      <h2>{t("user_registration")}</h2>
      <div>
        <label>{t("email")}:</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", marginBottom: 10 }}
        />
      </div>
      <div>
        <label>{t("wallet")}:</label>
        <input
          type="text"
          required
          value={wallet}
          onChange={(e) => setWallet(e.target.value)}
          style={{ width: "100%", marginBottom: 10 }}
        />
      </div>
      <button type="submit" disabled={loading}>
        {loading ? t("registering") : t("register_btn")}
      </button>
      {message && <div style={{ marginTop: 10 }}>{message}</div>}
    </form>
  );
};

export default RegisterForm;
