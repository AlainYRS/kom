import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, sendSignInLinkToEmail, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: proicess.env.NEXT_PUBLIC_apiKey,
  authDomain: proicess.env.NEXT_PUBLIC_authDomain,
  projectId: proicess.env.NEXT_PUBLIC_projectId,
  storageBucket: proicess.env.NEXT_PUBLIC_storageBucket,
  messagingSenderId: proicess.env.NEXT_PUBLIC_messagingSenderId,
  appId: proicess.env.NEXT_PUBLIC_appId,
  measurementId: proicess.env.NEXT_PUBLIC_measurementId,
};

const firebase = initializeApp(firebaseConfig);
const dbfirestore = getFirestore(firebase);
const analytics = getAnalytics(firebase);
const auth = getAuth(firebase);
const GoogleUser = new GoogleAuthProvider();
const FacebookUser = new FacebookAuthProvider();


export {firebase, dbfirestore, auth, analytics};