import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChsWHZ-0cnGT303T1zfW1XQ052YL4yj2k",
  authDomain: "xolid-13eca.firebaseapp.com",
  projectId: "xolid-13eca",
  storageBucket: "xolid-13eca.appspot.com",
  messagingSenderId: "23116860361",
  appId: "1:23116860361:web:e11a826523482afd4406dc",
  measurementId: "G-3GJZMNYP4N"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
