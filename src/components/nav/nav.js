import React, { useState, useEffect } from "react";
// import { faBars } from "@fortawesome/fontawesome-svg-core";

import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

export function Nav() {
  const [HandleMenu, setHandleMenu] = useState(false);

  function openHandleMenuClick() {
    if (HandleMenu !== false) {
      setHandleMenu(false);
    } else {
      setHandleMenu(true);
    }
  }
  return (
    <nav className="Navbar">
      <button className="buttonMenu" onClick={() => openHandleMenuClick()}>
        <FontAwesomeIcon className="faBars" icon={faBars} />
      </button>

      {HandleMenu && (
        <ul className="Menu-Dropdown-Content">
          <li className="Menu-Container-Content-Li">
            <Link className="Menu-Container-Content-Text" to="/">
              Home
            </Link>
          </li>

          <li>
            <Link className="Menu-Container-Content-Text" to="/products">
              Products
            </Link>
          </li>

          <li>
            <Link className="Menu-Container-Content-Text" to="/checkout">
              checkout
            </Link>
          </li>

          <li>
            <Link className="Menu-Container-Content-Text" to="/login">
              log in
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
