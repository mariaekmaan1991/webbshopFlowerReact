import { React, useState, useEffect } from "react";

import { firebase } from "../firebase/firebase";
export function LoggNi() {
  // const [customerPassword, setCustomerPassword] = useState();
  // const [customerMail, setCustomerMail] = useState();

  // function formCustomerPassword(e) {
  //   setCustomerPassword(e.target.value);
  // }

  // function formCustomerMail(e) {
  //   setCustomerMail(e.target.value);
  // }

  // firebase
  //   .auth()
  //   .signInWithEmailAndPassword(email, password)
  //   .then((user) => {
  //     // Signed in
  //     // ...
  //   })
  //   .catch((error) => {
  //     var errorCode = error.code;
  //     var errorMessage = error.message;
  //   });

  // firebase
  //   .auth()
  //   .signInWithEmailAndPassword(email, password)
  //   .then((user) => {
  //     // Signed in
  //     // ...
  //   })
  //   .catch((error) => {
  //     var errorCode = error.code;
  //     var errorMessage = error.message;
  //   });

  // firebase
  //   .auth()
  //   .signOut()
  //   .then(() => {
  //     // Sign-out successful.
  //   })
  //   .catch((error) => {
  //     // An error happened.
  //   });

  return (
    <div>
      <h1>sss</h1>
      {/* Användare
      <input type="text" onChange={formCustomerMail} />
      Lösen
      <input onChange={formCustomerPassword} /> */}
      <button onClick={() => firebase.auth().signOut()}></button>
    </div>
  );
}
//https://codesandbox.io/s/react-router-nesting-forked-3b6h7?file=/example.j
