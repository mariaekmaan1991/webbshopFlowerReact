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
    <nav className="Nav site-nav">
      <div className="Nav-Dropdown">
        <div className="Navbar">
          <button className="buttonMenu" onClick={() => openHandleMenuClick()}>
            <FontAwesomeIcon className="faBars" icon={faBars} />
          </button>
          <Link className="Menu-Container-Content-Text nav-link" to="/products">
            Products
          </Link>
        </div>
        {HandleMenu && (
          <ul className="Menu-Dropdown-Content">
            <li className="Menu-Container-Content-Li">
              <Link className="Menu-Container-Content-Text nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="Menu-Container-Content-Li">
              <Link
                className="Menu-Container-Content-Text nav-link"
                to="/products"
              >
                Products
              </Link>
            </li>

            <li className="Menu-Container-Content-Li">
              <Link
                className="Menu-Container-Content-Text nav-link"
                to="/checkout"
              >
                checkout
              </Link>
            </li>

            <li className="Menu-Container-Content-Li">
              <Link
                className="Menu-Container-Content-Text nav-link"
                to="/login"
              >
                log in
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
