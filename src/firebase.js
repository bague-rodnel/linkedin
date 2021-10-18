import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC_HGKpblDflJ5YAYA7-4PDXF2Rl3XugNE",
  authDomain: "linkedin-clone-dd782.firebaseapp.com",
  projectId: "linkedin-clone-dd782",
  storageBucket: "linkedin-clone-dd782.appspot.com",
  messagingSenderId: "686748768645",
  appId: "1:686748768645:web:47f2e29cb2a4dd74d34cec",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
