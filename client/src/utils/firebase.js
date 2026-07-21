
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "fir-23a52.firebaseapp.com",
  projectId: "fir-23a52",
  storageBucket: "fir-23a52.firebasestorage.app",
  messagingSenderId: "827791343320",
  appId: "1:827791343320:web:8ea0daa24aa6562aa6a1ad",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}