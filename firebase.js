// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { initializeAuth } from 'firebase/auth';
// import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdxiUe1ic7T24M3nx7ZEyF0aB16uRH2xs",
  authDomain: "movielist-a5349.firebaseapp.com",
  projectId: "movielist-a5349",
  storageBucket: "movielist-a5349.appspot.com",
  messagingSenderId: "186465524435",
  appId: "1:186465524435:web:ead450acb2fbcd6eabd226"
};

// // Initialize Firebase Auth with AsyncStorage
// initializeAuth(app, {
//   persistence: 'local', // or 'session' or 'none'
//   AsyncStorage: AsyncStorage,
// });

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
