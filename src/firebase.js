//firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth} from "firebase/auth";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHuddM84q8-hzzSRYzo0xoSrGe-inD4rk",
  authDomain: "scheduler-843ac.firebaseapp.com",
  projectId: "scheduler-843ac",
  storageBucket: "scheduler-843ac.appspot.com",
  messagingSenderId: "755177217354",
  appId: "1:755177217354:web:df16e6d8ea855d8578f5b3"
};

export const createUser = async (email, password) => {
    return createUserWithEmailAndPassword(getAuth(app), email, password);
  }
  
export const signInUser = async (email, password) => {
    return signInWithEmailAndPassword(getAuth(app), email, password);
  }

// Initialize Firebase
const app = initializeApp(firebaseConfig);