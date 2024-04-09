// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkNkZw_pjVVXf2CI_VY0sPUhIpN3dbHDw",
  authDomain: "random-project-9347a.firebaseapp.com",
  projectId: "random-project-9347a",
  storageBucket: "random-project-9347a.appspot.com",
  messagingSenderId: "301711498073",
  appId: "1:301711498073:web:a67ac85cfb673d27714a48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;