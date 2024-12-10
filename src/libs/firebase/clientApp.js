
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDbrYU_k76L0Z8cxIXhdO8R56TSUvxFWQw",
  authDomain: "orientheight-crdb.firebaseapp.com",
  projectId: "orientheight-crdb",
  storageBucket: "orientheight-crdb.firebasestorage.app",
  messagingSenderId: "365544503357",
  appId: "1:365544503357:web:271d49cbba0ae2930dd254"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };