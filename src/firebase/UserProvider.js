import { React, useEffect, useContext, useState, createContext } from "react";
import firebase from "firebase/app";
// import { firebase } from "./config";
export const UserContext = createContext();

export const UserProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({
    user: null,
    loading: true,
    IsAdmin: false,
  });
  //   const [Isloading, setLoding] = useState(false);
  // här kollar om använadare finns
  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      let IsAdmin = false;

      if (!!user) {
        const token = await user.getIdTokenResult();

        IsAdmin = token.claims.IsAdmin;
      }

      setCurrentUser({ loading: false, user, IsAdmin });
    });
  }, []);
  console.log(currentUser, "finnscurrentUser???");

  return (
    <UserContext.Provider value={{ currentUser }}>
      {!currentUser.loading && props.children}
    </UserContext.Provider>
  );
};
