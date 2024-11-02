// src/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBYK4kNsP-CdkQbJr7Wx5NMzF1UlHlUNdQ",
    authDomain: "brilliant-clone-21073.firebaseapp.com",
    projectId: "brilliant-clone-21073",
    storageBucket: "brilliant-clone-21073.firebasestorage.app",
    messagingSenderId: "89044899881",
    appId: "1:89044899881:web:3ff410839da1d4031a6438",
    measurementId: "G-WYZT7HZGPZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app)
const provider = new GoogleAuthProvider();

export const signUpWithEmail = (email: string, password: string) => createUserWithEmailAndPassword(auth, email, password);
export const signUpWithGoogle = () => signInWithPopup(auth, provider);
export { auth, db };
