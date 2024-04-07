// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnfHTgP2Ik73jhIswsnVzskZmj-x9mHZI",
  authDomain: "auth-merging.firebaseapp.com",
  projectId: "auth-merging",
  storageBucket: "auth-merging.appspot.com",
  messagingSenderId: "734065094181",
  appId: "1:734065094181:web:1e6c0843bbdf85f8e519cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
