import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwBW7FMxrxntyxngfnt8JTvflVLhMT1Fs",
  authDomain: "i-spent-it.firebaseapp.com",
  projectId: "i-spent-it",
  storageBucket: "i-spent-it.appspot.com",
  messagingSenderId: "457729456487",
  appId: "1:457729456487:web:0f3e2d427ed1a84a3e97c2",
};

// init firebase
const app = firebase.initializeApp(firebaseConfig);

// init firestore
const projectFirestore = app.firestore();

// init auth
const projectAuth = app.auth();

export { projectFirestore, projectAuth };
