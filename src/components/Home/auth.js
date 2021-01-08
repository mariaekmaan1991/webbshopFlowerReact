import { React, useState, useEffect, createContext } from "react";

import { firebase } from "../firebase/firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  //console.log(children, " children vadär de?");
  const [currentUser, setCurrentUser] = useState(null);
  // const [pending, setPending] = useState(true);

  console.log(currentUser);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      // setPending(false);
    });
  }, []);
  console.log(currentUser, "finns", currentUser);

  // if (pending) {
  //   return <>Loading...</>;
  // }
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
