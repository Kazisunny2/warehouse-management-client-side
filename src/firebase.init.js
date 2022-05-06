// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcLgR5GI1c_s33gZXGwlETK9ZefS-VMkI",
  authDomain: "warehouse-inventory-mana-f5eed.firebaseapp.com",
  projectId: "warehouse-inventory-mana-f5eed",
  storageBucket: "warehouse-inventory-mana-f5eed.appspot.com",
  messagingSenderId: "211872738210",
  appId: "1:211872738210:web:54dd14d118576d01c060fb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
