// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN9DkGOGNdh5RwEszapdMDh95koxvd7-Q",
  authDomain: "moha-milon-74730.firebaseapp.com",
  projectId: "moha-milon-74730",
  storageBucket: "moha-milon-74730.appspot.com",
  messagingSenderId: "632747516355",
  appId: "1:632747516355:web:39747124b2a91253255d76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
