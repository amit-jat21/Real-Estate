// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ember-estate.firebaseapp.com",
  projectId: "ember-estate",
  storageBucket: "ember-estate.appspot.com",
  messagingSenderId: "384745250739",
  appId: "1:384745250739:web:ca6163d4156786dff3f5c6"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);