// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore' 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHIjblVDoHv2nhGScQb9n_jWb-j68kIDI",
  authDomain: "aitripgen.firebaseapp.com",
  projectId: "aitripgen",
  storageBucket: "aitripgen.appspot.com",
  messagingSenderId: "825514816774",
  appId: "1:825514816774:web:abf7b44dc18135109a9a87"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);