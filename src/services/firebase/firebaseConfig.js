import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBYoWBFJtr5gGLQQAdgMQ8e3UThMrR9jp0",
    authDomain: "react-e-commerce-a8b86.firebaseapp.com",
    projectId: "react-e-commerce-a8b86",
    storageBucket: "react-e-commerce-a8b86.appspot.com",
    messagingSenderId: "977173240652",
    appId: "1:977173240652:web:4b699097eb8c9bd93b8de9",
    measurementId: "G-BMNPRHJNXX"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);