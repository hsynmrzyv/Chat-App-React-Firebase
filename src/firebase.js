// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhdQZo2pRo8OwcZTbTCSSZNQzkNNFmoMI",
  authDomain: "chat-app-d264d.firebaseapp.com",
  projectId: "chat-app-d264d",
  storageBucket: "chat-app-d264d.appspot.com",
  messagingSenderId: "1025373571023",
  appId: "1:1025373571023:web:44d0f7d16bfde0addd34ba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
