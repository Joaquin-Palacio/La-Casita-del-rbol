import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAMuz8t56F55ZVe9VVFCpo163v8e3hOx2I',
  authDomain: 'river-shop-91218.firebaseapp.com',
  projectId: 'river-shop-91218',
  storageBucket: 'river-shop-91218.appspot.com',
  messagingSenderId: '762712576804',
  appId: '1:762712576804:web:a1004b4080f504d48a99b1',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);