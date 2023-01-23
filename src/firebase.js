// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCl1B6xxFjCUTTdrsyRj18oy83hhAIbEmc",
    authDomain: "company-search-tzr.firebaseapp.com",
    projectId: "company-search-tzr",
    storageBucket: "company-search-tzr.appspot.com",
    messagingSenderId: "817602003392",
    appId: "1:817602003392:web:a15038e3efb0244c754825"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
console.log(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
