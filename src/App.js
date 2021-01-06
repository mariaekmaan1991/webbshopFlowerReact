import React, { useState, useEffect } from "react";
import { Admin } from "./components/Admin/Admin";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";

import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ProductsParent } from "./components/ProductsParent/productsParent";
import { DetailParent } from "./components/DetailParent/DetailParent";
import { CheckOutParent } from "./components/checkOut/checkOutParent";
import { Home } from "./components/Home/home";
import { NoMatch } from "./components/NoMatch/NoMatch";
import { main } from "./components/NoMatch/NoMatch";
import { AuthProvider } from "./components/Home/auth";
import LogIn from "./components/Home/login";
import { SignUp } from "./components/Home/signUp";
import PrivateRoute from "./components/privateRoute/privateRoute";
import { mainsass } from "./scss/main.scss";

function App() {
  const [ShoppingCartList, setShoppingCartList] = useState([]);

  let shoppingCartQuantityCounter = 0;
  let counterPrice = 0;
  for (let i = 0; i < ShoppingCartList.length; i++) {
    shoppingCartQuantityCounter =
      shoppingCartQuantityCounter + parseInt(ShoppingCartList[i].quantity);
    counterPrice = counterPrice + parseInt(ShoppingCartList[i].price);
  }

  const [navButton, setNavButton] = useState(false);

  function NavButton(e) {
    setShoppingCartList(e);
  }

  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <header className="App-header"></header>
          <div className="Nav-Box">
            <nav className="Navbar">
              <div className="Nav-Icon" onClick={NavButton}>
                {navButton ? (
                  <FontAwesomeIcon icon={faTimes} />
                ) : (
                  <FontAwesomeIcon icon={faBars} />
                )}
              </div>
              <ul className="Nav-Ul">
                <FontAwesomeIcon icon={faTimes} />
                <li className="Nav-Li">
                  <Link to="/">Home</Link>
                </li>
                <li className="Nav-Li">
                  <Link to="/products">Products</Link>
                </li>
                <li className="Nav-Li">
                  <Link to="/checkout">checkout</Link>
                </li>
                <li className="Nav-Li">
                  <Link to="/login">log in</Link>
                </li>
              </ul>
              varukorg:{shoppingCartQuantityCounter}
              summa:{counterPrice}
            </nav>

            <main>
              <Switch>
                <Route exact path="/login" component={LogIn} />
                <PrivateRoute exact path="/admin" component={Admin} />
                <Route exact path="/products" component={ProductsParent} />
                <Route exact path="/checkout">
                  <CheckOutParent
                    setShoppingCartList={setShoppingCartList}
                    ShoppingCartList={ShoppingCartList}
                  />
                </Route>

                <Route path="/products/:id" component={DetailParent} />
                <Route exact path="/" component={Home} />
                <Route path="*" component={NoMatch} />
              </Switch>
            </main>
            <footer></footer>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
//https://www.youtube.com/watch?v=3ZEz-iposj8
//https://www.youtube.com/watch?v=v0TKYSkZ2tI
//https://firebase.google.com/docs/reference/js/firebase.database.Database
//https://www.youtube.com/watch?v=unr4s3jd9qA
//https://codepen.io/naturalclar/pen/zEwvbg
