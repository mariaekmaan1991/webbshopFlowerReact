import { React, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useHistory,
} from "react-router-dom";
import { logOut } from "../firebase/auth";

export function Header() {
  const history = useHistory();

  const logOutUser = async () => {
    await logOut;
    history.push("/login");
  };
  return (
    <div>
      <button onClick={logOutUser}>loga ut</button>
    </div>
  );
}
//https://codesandbox.io/s/react-router-nesting-forked-3b6h7?file=/example.js
