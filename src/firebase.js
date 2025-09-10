// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDB5kNsmuKy2UA0JI3YP-Ut0j_msqtXSBA",
  authDomain: "project-b7e98.firebaseapp.com",
  projectId: "project-b7e98",
  storageBucket: "project-b7e98.firebasestorage.app",
  messagingSenderId: "840048969038",
  appId: "1:840048969038:web:4d5e4d0d1ce8f14cc7ca1f",
  measurementId: "G-XW26J6WYQ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);