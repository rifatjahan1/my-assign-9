// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPo8auT4EtpRrHQ_NRR8zI2s9h-gzZEcw",
  authDomain: "my-assign-9.firebaseapp.com",
  projectId: "my-assign-9",
  storageBucket: "my-assign-9.firebasestorage.app",
  messagingSenderId: "111463809451",
  appId: "1:111463809451:web:46bb4a06d7e3b57a7852ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);