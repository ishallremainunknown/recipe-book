// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_dCNSspWR_tNA8YQ1x98jog-SRBzVua4",
  authDomain: "recipe-book-37624.firebaseapp.com",
  projectId: "recipe-book-37624",
  storageBucket: "recipe-book-37624.appspot.com",
  messagingSenderId: "1050759522435",
  appId: "1:1050759522435:web:795a0d3a07763f7b6453b6",
  measurementId: "G-VPXR79310T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
