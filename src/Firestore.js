// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0nXRjUoCJD_90DVrLBwsOAznDP7Kbb8g",
  authDomain: "yyyyat-app.firebaseapp.com",
  projectId: "yyyyat-app",
  storageBucket: "yyyyat-app.appspot.com",
  messagingSenderId: "897135289609",
  appId: "1:897135289609:web:74b68f2cdfb0c717a61fd8",
  measurementId: "G-B6CP8X1V2P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);