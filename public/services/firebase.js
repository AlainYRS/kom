import { initializeApp } from "@firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, sendSignInLinkToEmail, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_apiKey,
  authDomain: process.env.NEXT_PUBLIC_authDomain,
  projectId: process.env.NEXT_PUBLIC_projectId,
  storageBucket: process.env.NEXT_PUBLIC_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_appId,
  measurementId: process.env.NEXT_PUBLIC_measurementId,
};

let Firebase;
let firestore;
let storage;
let analytics;
let auth;
let googleAuthProvider;
let facebookAuthProvider;
let initialized = false;

const initializeFirebase = () => {
  if (!initialized) {
    try {
        Firebase = initializeApp(firebaseConfig);
        firestore = getFirestore();
        storage = getStorage();
        analytics = getAnalytics();
        auth = getAuth();
        googleAuthProvider = new GoogleAuthProvider();
        facebookAuthProvider = new FacebookAuthProvider();
        initialized = true;
    } catch (error) {
        console.error("Error initializing Firebase:", error);
    }
  }
}

initializeFirebase();


export { Firebase, firestore, storage, analytics, auth, googleAuthProvider, facebookAuthProvider };