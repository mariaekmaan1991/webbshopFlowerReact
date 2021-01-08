import { React, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useHistory,
} from "react-router-dom";

export function Header() {
  const history = useHistory();

  const logoutUser = async () => {
    history.push("/signup");
  };
  return (
    <div>
      <button onClick={logoutUser}>loga ut</button>
    </div>
  );
}
//https://codesandbox.io/s/react-router-nesting-forked-3b6h7?file=/example.js
