import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBBBr25XOd3tjjy77yIFMPgUND4p5w8evw",
  authDomain: "delta-rise-engineering.firebaseapp.com",
  projectId: "delta-rise-engineering",
  storageBucket: "delta-rise-engineering.firebasestorage.app",
  messagingSenderId: "521857099386",
  appId: "1:521857099386:web:b2a42613fdc31a2c38bdc3",
  measurementId: "G-PRZSHNDH36",
};

const app = initializeApp(firebaseConfig);

// Firebase Authentication
const auth = getAuth(app);

export { auth };