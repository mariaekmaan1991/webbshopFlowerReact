import { React, useState, useEffect, useContext, createContext } from "react";
// import { firebase } from "./firebase";

import firebase from "firebase/app";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [Isloading, setLoding] = useState(false);
  // här kollar om använadare finns
  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      let IsAdmin = false;

      if (!!user) {
        const token = await user.getIdTokenResult();
        console.log(token);
        IsAdmin = token.claims.IsAdmin; //email
        console.log(user.uid, "user", IsAdmin, "isAdmin");
      }
      setCurrentUser({ user: user, IsAdmin: IsAdmin });
    });
  }, []);
  // console.log(currentUser.email, "finnscurrentUser???");

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

//  funktion gör att man kan använda currentUser i en annan file
