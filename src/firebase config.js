// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from 'firebase/auth';
import {Firestore, getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: ",
  authDomain: "chat-app-62100.firebaseapp.com",
  projectId: "chat-app-62100",
  storageBucket: "chat-app-62100.firebasestorage.app",
  messagingSenderId: "430393024764",
  appId: "1:430393024764:web:4e382d6af1dc8f25e5f779"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
