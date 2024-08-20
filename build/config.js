import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBpH03TmrkApAgcgXk2WIEqWjJ5cV0tAj4",
    authDomain: "buy-sell-app-1d977.firebaseapp.com",
    projectId: "buy-sell-app-1d977",
    storageBucket: "buy-sell-app-1d977.appspot.com",
    messagingSenderId: "422790971325",
    appId: "1:422790971325:web:2f8e516d08033e8f645cd4",
    measurementId: "G-5CXC0JCK41"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


