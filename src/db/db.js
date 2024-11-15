import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDy9M6b3d1QeiSp52GnHoO1N2v97xqqKZk",
  authDomain: "proyecto-bosque.firebaseapp.com",
  projectId: "proyecto-bosque",
  storageBucket: "proyecto-bosque.firebasestorage.app",
  messagingSenderId: "711597495242",
  appId: "1:711597495242:web:e7c1a8134a1c4a27923533"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db