import { React, useState, useEffect, useContext, createContext } from "react";

import { firebase } from "../firebase/firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [Isloading, setLoding] = useState(false);
  // här kollar om använadare finns
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user.email, "usser");
      setCurrentUser(user);
      setLoding();
    });
  }, []);
  // console.log(currentUser.email, "finnscurrentUser???");

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useSession = () => {
  const session = useContext(AuthContext);
  return session;
};
//  funktion gör att man kan använda currentUser i en annan file
