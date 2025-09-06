
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDC97YxcMLz2HKqNade11njmFYfIxM7n_Q",
  authDomain: "fir-crud-cbf01.firebaseapp.com",
  projectId: "fir-crud-cbf01",
  storageBucket: "fir-crud-cbf01.firebasestorage.app",
  messagingSenderId: "986198043316",
  appId: "1:986198043316:web:591b56b4e76c07908085e1",
  measurementId: "G-PXL68PPZ6X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// this is for analytics
const analytics = getAnalytics(app);