// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnD-hVolMTHRQVQIlUEUIbMCy6CMbIoAM",
  authDomain: "email-password-auth-1b7ee.firebaseapp.com",
  projectId: "email-password-auth-1b7ee",
  storageBucket: "email-password-auth-1b7ee.appspot.com",
  messagingSenderId: "687701164653",
  appId: "1:687701164653:web:a17464f8626dbccf59b564"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;