// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_YOUR_PROJECTID,
    storageBucket: import.meta.env.VITE_YOUR_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_YOUR_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_YOUR_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
