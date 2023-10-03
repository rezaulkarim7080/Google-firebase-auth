
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBL3mW5wNaCjWPqbFEEr44HZ3qrQKnisro",
  authDomain: "fir-5c681.firebaseapp.com",
  projectId: "fir-5c681",
  storageBucket: "fir-5c681.appspot.com",
  messagingSenderId: "261162676677",
  appId: "1:261162676677:web:9eafec60bb3d33ae221bac",
  measurementId: "G-E49NRGHVVS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
