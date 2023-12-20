import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAf1_TrvQKfsFoYxc3IFNjyAB8tEyRJQeo",
  authDomain: "clone-e0935.firebaseapp.com",
  projectId: "clone-e0935",
  storageBucket: "clone-e0935.appspot.com",
  messagingSenderId: "132011621061",
  appId: "1:132011621061:web:9a917d3b23c52726adceac"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };