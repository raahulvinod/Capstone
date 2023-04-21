import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASmlwWKa6phH-Xn1iZAJ9pYgOVMDubUd0",
  authDomain: "crwn-clothing-db-52c76.firebaseapp.com",
  projectId: "crwn-clothing-db-52c76",
  storageBucket: "crwn-clothing-db-52c76.appspot.com",
  messagingSenderId: "1021164721423",
  appId: "1:1021164721423:web:51fa0e849b357cf3195a7a",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnaphshot = await getDoc(userDocRef);
    console.log(userSnaphshot);
    console.log(userSnaphshot.exists());
}
