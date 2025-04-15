// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5lJh5vnBMrLK5Qtv8NnCjWn5cK0KOO1Q",
  authDomain: "vapiai1.firebaseapp.com",
  projectId: "vapiai1",
  storageBucket: "vapiai1.firebasestorage.app",
  messagingSenderId: "1011743312699",
  appId: "1:1011743312699:web:8d5f1670028037e323451e",
  measurementId: "G-PJXDWP84XR"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);