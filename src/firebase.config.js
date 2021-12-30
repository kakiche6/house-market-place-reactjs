import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCWi1tqmlQKHaUbobKEsSST10Xe0UEQuO8',
  authDomain: 'house-market-place-fe147.firebaseapp.com',
  projectId: 'house-market-place-fe147',
  storageBucket: 'house-market-place-fe147.appspot.com',
  messagingSenderId: '697528672010',
  appId: '1:697528672010:web:1ff3794eebd586a1d864f3',
};

// Initialize Firebase
export const db = getFirestore();
