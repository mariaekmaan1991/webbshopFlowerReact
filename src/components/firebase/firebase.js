import firebase from "firebase/app";

// import "firebase/database";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCV8aVnA77akdCWtDiwt25g5dpfkrOg3fs",
  authDomain: "flowershopmaria-e43ce.firebaseapp.com",
  databaseURL:
    "https://flowershopmaria-e43ce-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "flowershopmaria-e43ce",
  storageBucket: "flowershopmaria-e43ce.appspot.com",
  messagingSenderId: "454534574680",
  appId: "1:454534574680:web:4d879f7649801e3925102d",
};
console.log(firebaseConfig);
firebase.initializeApp(firebaseConfig);
export { firebase };
//https://firebase.google.com/docs/database/web/read-and-write?authuser=0
// apiKey: process.env.RECAT_APP_API_KEY,
//   authDomain: process.env.RECAT_APP_AUTH_DOMIN,
//   databaseURL: process.env.RECAT_APP_DATABAS_URL,
//   projectId: process.env.RECAT_APP_PROJECT_ID,
//   storageBucket: process.env.RECAT_APP_STORAGE_BACKET,
//   messagingSenderId: process.env.RECAT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.RECAT_APP_ID,
