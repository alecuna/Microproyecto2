// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBA6mcQtB8G9mNuPq1OFNtPg4TGdPLNHFY",
  authDomain: "micro2-a0629.firebaseapp.com",
  projectId: "micro2-a0629",
  storageBucket: "micro2-a0629.appspot.com",
  messagingSenderId: "18458566006",
  appId: "1:18458566006:web:79b6a397919e4f02da2e57",
  measurementId: "G-XQ14W10FFS",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.addScope("profile");
googleProvider.addScope("email");
