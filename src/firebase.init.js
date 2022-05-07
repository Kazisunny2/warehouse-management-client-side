// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKnNFOozRzy5-_GOsYw7tAaYrZO_1n4tM",
  authDomain: "warehouse-inventory-mana-2a817.firebaseapp.com",
  projectId: "warehouse-inventory-mana-2a817",
  storageBucket: "warehouse-inventory-mana-2a817.appspot.com",
  messagingSenderId: "364614875634",
  appId: "1:364614875634:web:e458d5960249885ea4136b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
