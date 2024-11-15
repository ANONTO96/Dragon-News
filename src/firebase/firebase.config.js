// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBos9nyKtax51N8_wBHzN7jWANQl4Me4k0",
  authDomain: "dragon-news-99a22.firebaseapp.com",
  projectId: "dragon-news-99a22",
  storageBucket: "dragon-news-99a22.firebasestorage.app",
  messagingSenderId: "256588243930",
  appId: "1:256588243930:web:434180c9da19039e1996e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);