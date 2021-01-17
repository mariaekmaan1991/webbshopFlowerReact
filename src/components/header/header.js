import { React, useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import { firebase } from "../../firebase/config";
import { UserContext } from "../../firebase/UserProvider";

export function Header() {
  const history = useHistory();
  const { currentUser } = useContext(UserContext);

  const logOutUser = async () => {
    await firebase.auth().signOut();

    history.push("/signup");
  };
  return (
    <header>
      {currentUser.user === null ? (
        <div>utloogad</div>
      ) : (
        <div>
          <button onClick={logOutUser}>loga ut</button>
        </div>
      )}
    </header>
  );
}
//https://codesandbox.io/s/react-router-nesting-forked-3b6h7?file=/example.js
