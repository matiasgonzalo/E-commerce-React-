import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: String(process.env.REACT_APP_apiKey),
    authDomain: String(process.env.REACT_APP_authDomain),
    projectId: String(process.env.REACT_APP_proyectId),
    storageBucket: String(process.env.REACT_APP_storageBucket),
    messagingSenderId: String(process.env.REACT_APP_messagingSenderId),
    appId: String(process.env.REACT_APP_appId),
    measurementId: String(process.env.REACT_APP_measurementId)
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);