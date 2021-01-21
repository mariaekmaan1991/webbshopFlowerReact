import React, { useState, useEffect, useContext } from "react";
// import { faBars } from "@fortawesome/fontawesome-svg-core";
import { useHistory } from "react-router-dom";

import { firebase } from "../../firebase/config";
import { UserContext } from "../../firebase/UserProvider";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

export function Nav({QuantityCounterTotal}) {
  const [HandleMenu, setHandleMenu] = useState(false);

  function openHandleMenuClick() {
    if (HandleMenu) {
      setHandleMenu(false);
    } else {
      setHandleMenu(true);
    }
  }

  const history = useHistory();
  const { currentUser } = useContext(UserContext);

  const logOutUser = async () => {
    await firebase.auth().signOut();

    history.push("/signup");
  };

  return (
    <nav className="Nav site-nav">
      <div className="Nav-Dropdown">
        <div className="Navbar">
          <button className="buttonMenu" onClick={() => openHandleMenuClick()}>
            <FontAwesomeIcon className="faBars" icon={faBars} />
          </button>
          <div></div>

          {currentUser.user === null ? (
            <Link to="/login">Logga in</Link>
          ) : (
            <div>
              <FontAwesomeIcon className="faBars" icon={faUser} />
              <button onClick={logOutUser}>loga ut</button>
            </div>
          )}
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
