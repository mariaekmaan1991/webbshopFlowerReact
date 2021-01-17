import firebase from "firebase";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCSSbJPJXtEFfm9TPB8K8WEBfRxawjXjZw",
  authDomain: "fir-test-34550.firebaseapp.com",
  projectId: "fir-test-34550",
  storageBucket: "fir-test-34550.appspot.com",
  messagingSenderId: "720751443222",
  appId: "1:720751443222:web:744c737d409dc0ab012437",
  measurementId: "G-XNE691P604",
};
firebase.initializeApp(firebaseConfig);
export { firebase };

/* apiKey: process.env.RECAT_APP_API_KEY,
  authDomain: process.env.RECAT_APP_AUTH_DOMIN,
  projectId: process.env.RECAT_APP_PROJECT_ID,
  storageBucket: process.env.RECAT_APP_STORAGE_BACKET,
  messagingSenderId: process.env.RECAT_APP_MESSAGING_SENDER_ID,
  appId: process.env.RECAT_APP_ID,
  measurementId: process.env.RECAT_APP_MEASUREMENTI,*/

/**apiKey: process.env.RECAT_APP_API_KEY,
  authDomain: process.env.RECAT_APP_AUTH_DOMIN,
  projectId: process.env.RECAT_APP_PROJECT_ID,
  storageBucket: process.env.RECAT_APP_STORAGE_BACKET,
  messagingSenderId: process.env.RECAT_APP_MESSAGING_SENDER_ID,
  appId: process.env.RECAT_APP_ID,
  measurementId: process.env.RECAT_APP_MEASUREMENTID, */

//   apiKey: "AIzaSyCSSbJPJXtEFfm9TPB8K8WEBfRxawjXjZw",
//   authDomain: "fir-test-34550.firebaseapp.com",
//   projectId: "fir-test-34550",
//   storageBucket: "fir-test-34550.appspot.com",
//   messagingSenderId: "720751443222",
//   appId: "1:720751443222:web:744c737d409dc0ab012437",
//   measurementId: "G-XNE691P604",
// };
