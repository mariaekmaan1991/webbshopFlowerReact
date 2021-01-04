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

firebase.initializeApp(firebaseConfig);
export { firebase };
//https://firebase.google.com/docs/database/web/read-and-write?authuser=0
