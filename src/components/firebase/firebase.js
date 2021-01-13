import firebase from "firebase/app";

// import "firebase/database";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCMgdAXMEpCr7J2stlDiiV1Ps4draa7gHY",
  authDomain: "powerflowershop-b5edb.firebaseapp.com",
  projectId: "powerflowershop-b5edb",
  storageBucket: "powerflowershop-b5edb.appspot.com",
  messagingSenderId: "523492980667",
  appId: "1:523492980667:web:6319bbe7f5368d0480769e",
  measurementId: "G-Z2X941ELV6",
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
