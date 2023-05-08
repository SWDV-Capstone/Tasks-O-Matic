// Adding "* as", "getFirestore", and "export const" was the key to making this work.  I found this solution on Stack Overflow.
import * as firebase from 'firebase/app';
// import 'firebase/firestore';
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2ILYJM_X-JeQQZSFpsNY82P8QxXjwuMM",
  authDomain: "tasks-o-matic-960a3.firebaseapp.com",
  projectId: "tasks-o-matic-960a3",
  storageBucket: "tasks-o-matic-960a3.appspot.com",
  messagingSenderId: "659637068769",
  appId: "1:659637068769:web:6f08e0e7aa26dc86d928a0"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// export default firebaseApp.firestore();
export const db = getFirestore(firebaseApp);