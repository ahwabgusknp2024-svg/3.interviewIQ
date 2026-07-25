
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
   authDomain: "interview-ai-2-5a0a2.firebaseapp.com",
  projectId: "interview-ai-2-5a0a2",
  storageBucket: "interview-ai-2-5a0a2.firebasestorage.app",
  messagingSenderId: "719967508145",
  appId: "1:719967508145:web:c2ddd2b7c76ebec4cdf490"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}