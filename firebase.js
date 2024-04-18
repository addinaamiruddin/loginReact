// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSvV42a__SprlzuPlPOqnW8GaBm6Y4xcw",
  authDomain: "loginreact-14fd3.firebaseapp.com",
  databaseURL: "https://loginreact-14fd3-default-rtdb.firebaseio.com",
  projectId: "loginreact-14fd3",
  storageBucket: "loginreact-14fd3.appspot.com",
  messagingSenderId: "1044349055102",
  appId: "1:1044349055102:web:c6f7604aa9ad9b5945e82f",
  measurementId: "G-CHVRQDKDNJ"
};


export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
