import { React, useState, useEffect, createContext } from "react";
import { firebase } from "../firebase/firebase";

import { admin } from "../adminFirebase/adminFirebase";
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

  const uid = "id-admin_999";
  const claimasAdmin = {
    adminAccount: true,
  };

  // useEffect(() => {
  //   admin
  //     .auth()
  //     .createCustomToken(uid, claimasAdmin)
  //     .then((CustomToken) => {
  //       console.log(CustomToken);
  //     })
  //     .Catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  // if (pending) {
  //   return <>Loading...</>;
  // }
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
