// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "task-manager-27b56.firebaseapp.com",
  projectId: "task-manager-27b56",
  storageBucket: "task-manager-27b56.appspot.com",
  messagingSenderId: "142579979304",
  appId: "1:142579979304:web:bdca147f35594255fed11d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);