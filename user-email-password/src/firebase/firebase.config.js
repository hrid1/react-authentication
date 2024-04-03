// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCArdA5z2EhuFB9klJ3NixJgoIrmGnNk-4",
  authDomain: "user-email-password-13085.firebaseapp.com",
  projectId: "user-email-password-13085",
  storageBucket: "user-email-password-13085.appspot.com",
  messagingSenderId: "16626225200",
  appId: "1:16626225200:web:9914592d25beb174745df5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;