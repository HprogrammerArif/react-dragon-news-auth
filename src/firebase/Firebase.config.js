// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPexNYO0KzzT_n8cCciX2NMe4gXGPrGsQ",
  authDomain: "react-dragon-news-auth-dd628.firebaseapp.com",
  projectId: "react-dragon-news-auth-dd628",
  storageBucket: "react-dragon-news-auth-dd628.appspot.com",
  messagingSenderId: "794376812975",
  appId: "1:794376812975:web:8328589d4b2eaf1b72975a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;