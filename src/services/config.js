import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCms6UWDWRhBVsFgix6rNnk5Ck9l1PH4L8",
  authDomain: "la-casita-del-arbol-1783e.firebaseapp.com",
  projectId: "la-casita-del-arbol-1783e",
  storageBucket: "la-casita-del-arbol-1783e.firebasestorage.app",
  messagingSenderId: "993633868448",
  appId: "1:993633868448:web:25cfda0e81bda4c33d07c5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
