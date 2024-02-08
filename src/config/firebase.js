// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBujMONXmteWc6WyX3PB0PCa84aaX47BT0",
  authDomain: "react-quiz-2cc00.firebaseapp.com",
  projectId: "react-quiz-2cc00",
  storageBucket: "react-quiz-2cc00.appspot.com",
  messagingSenderId: "864464669268",
  appId: "1:864464669268:web:519303669e35e1f7853bc1"
};
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);