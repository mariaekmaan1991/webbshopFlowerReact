import React, { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  Redirect,
} from "react-router-dom";

import { Admin } from "./components/Admin/Admin";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ProductsParent } from "./components/ProductsParent/productsParent";
import { DetailParent } from "./components/DetailParent/DetailParent";
import { CheckOutParent } from "./components/checkOut/checkOutParent";
import { Home } from "./components/Home/home";
import { NoMatch } from "./components/NoMatch/NoMatch";

import PrivateRoute from "./components/privateRoute/privateRoute";
import { mainsass } from "./scss/main.scss";
import { Nav } from "./components/nav/nav";
import { Profile } from "./components/profile/Profile";
import { Header } from "./components/header/header";
import { LoginCustomer } from "./components/firebase/LoginCustomer/loginCustomer";
import { SignUpUserCustomer } from "./components/firebase/signUpCustomer";
import { AuthProvider } from "./components/firebase/AuthProvider";
import AdminRoute from "./components/privateRoute/AdminRoute";
import ProfileRedirect from "./components/privateRoute/ProfileRedirect";

function App() {
  const [ShoppingCartList, setShoppingCartList] = useState([]);

  let shoppingCartQuantityCounter = 0;
  let counterPrice = 0;
  for (let i = 0; i < ShoppingCartList.length; i++) {
    shoppingCartQuantityCounter =
      shoppingCartQuantityCounter + parseInt(ShoppingCartList[i].quantity);
    counterPrice = counterPrice + parseInt(ShoppingCartList[i].price);
  }

  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Header />
          <Nav />
          <main>
            <Switch>
              <ProfileRedirect exact path="/login" component={LoginCustomer} />
              <ProfileRedirect
                exact
                path="/signup"
                component={SignUpUserCustomer}
              />
              {/* <AdminRoute exact path="/admin" component={Admin} /> */}
              <Route exact path="/products" component={ProductsParent} />
              {/* <PrivateRoute exact path="/profile/:id" component={Profile} /> */}
              <Route exact path="/checkout">
                <CheckOutParent
                  setShoppingCartList={setShoppingCartList}
                  ShoppingCartList={ShoppingCartList}
                />
              </Route>
              <Route path="/products/:id" component={DetailParent} />
              <Route exact path="/" to="/login" component={Home} />
              <Route path="*" component={NoMatch} />
            </Switch>
          </main>
          <footer></footer>
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
