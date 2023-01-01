// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-RyojOCZnrAEemADsMrEz--b73mkXjbM",
  authDomain: "personalwebsite2-b14b9.firebaseapp.com",
  projectId: "personalwebsite2-b14b9",
  storageBucket: "personalwebsite2-b14b9.appspot.com",
  messagingSenderId: "424559381715",
  appId: "1:424559381715:web:0952a43c9a8ae65f885826"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {auth, db, provider};