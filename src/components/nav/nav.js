import React, { useState, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";

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
      <div>
        <button className="buttonMenu" onClick={() => openHandleMenuClick()}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      {HandleMenu && (
        <div className="container-content">
          <Link className="i" to="/">
            Home
          </Link>

          <Link className="i" to="/products">
            Products
          </Link>

          <Link className="i" to="/checkout">
            checkout
          </Link>

          <Link className="i" to="/login">
            log in
          </Link>
        </div>
      )}
    </nav>
  );
}
