import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAcm_h-QcISTlP0R8LGC0gL-flwyeTfeJs",
  authDomain: "invela-fc9e9.firebaseapp.com",
  projectId: "invela-fc9e9",
  storageBucket: "invela-fc9e9.firebasestorage.app",
  messagingSenderId: "898353304233",
  appId: "1:898353304233:web:656effe6d9b89f94d80fb8",
  measurementId: "G-STZ2DCSXB9",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
