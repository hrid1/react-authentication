// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeEHv5mesAYtXt4yhvni7G1DswpGS7KRM",
  authDomain: "auth-intragation.firebaseapp.com",
  projectId: "auth-intragation",
  storageBucket: "auth-intragation.appspot.com",
  messagingSenderId: "937331394093",
  appId: "1:937331394093:web:b6a5f3bef7803a41115aa4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export default app;
const auth = getAuth(app);
export default auth;