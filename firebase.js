// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyC-ATyeNRxpghyxN8gv982WCxksTx0Uv7g",
    authDomain: "to-do-list-8df0b.firebaseapp.com",
    projectId: "to-do-list-8df0b",
    storageBucket: "to-do-list-8df0b.apspot.com",
    messagingSenderId: "797575762272",
    appId: "1:797575762272:web:b1cdb7924aa4bbc0298e05",
    measurementId: "G-4WGQLHJ7NJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)


export default app;
