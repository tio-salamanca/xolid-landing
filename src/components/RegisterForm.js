import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [wallet, setWallet] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const q = query(collection(db, "users"), where("email", "==", email));
      const querySnapshot = await getDocs(q);

      const q2 = query(collection(db, "users"), where("wallet", "==", wallet));
      const querySnapshot2 = await getDocs(q2);

      if (!querySnapshot.empty) {
        setMessage("El email ya está registrado.");
        setLoading(false);
        return;
      }
      if (!querySnapshot2.empty) {
        setMessage("La wallet ya está registrada.");
        setLoading(false);
        return;
      }

      await addDoc(collection(db, "users"), {
        email,
        wallet,
        createdAt: new Date()
      });

      setMessage("Registro exitoso.");
      setEmail("");
      setWallet("");
    } catch (error) {
      setMessage("Ocurrió un error al registrar. Intenta de nuevo.");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleRegister} style={{ maxWidth: 400, margin: "2rem auto" }}>
      <h2>Registro de Usuario</h2>
      <div>
        <label>Email:</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", marginBottom: 10 }}
        />
      </div>
      <div>
        <label>Wallet:</label>
        <input
          type="text"
          required
          value={wallet}
          onChange={(e) => setWallet(e.target.value)}
          style={{ width: "100%", marginBottom: 10 }}
        />
      </div>
      <button type="submit" disabled={loading}>
        {loading ? "Registrando..." : "Registrar"}
      </button>
      {message && <div style={{ marginTop: 10 }}>{message}</div>}
    </form>
  );
};

export default RegisterForm;
