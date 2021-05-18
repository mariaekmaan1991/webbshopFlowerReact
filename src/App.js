import React, { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  Redirect,
} from "react-router-dom";

import { Admin } from "./components/page/Admin/Admin";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ProductsParent } from "./components/page/ProductsParent/productsParent";
import { DetailParent } from "./components/page/DetailParent/DetailParent";
import { CheckOutParent } from "./components/page/checkOut/checkOutParent";
import { Home } from "./components/page/Home/home";
import { NoMatch } from "./components/page/NoMatch/NoMatch";

import { mainsass } from "./scss/main.scss";
import { Nav } from "./components/nav/nav";

import { Header } from "./components/header/header";

import { Signup } from "./components/page/SignUp/Signup";

import { UserProvider } from "./firebase/UserProvider";

import { LogInUser } from "./components/page/loginUser/LogInUser";
import Localbase from "localbase";
import { AdminUser } from "./components/page/adminUser/adminUser";
import { ProfileUser } from "./components/page/ProfileUser/ProfileUser";
import { AdminRoute } from "./route/AdminRoute";
import { ProfileRedirect } from "./route/ProfileRedirect";
import { PrivateRoute } from "./route/PrivateRoute";
import { OrderConfirmation } from "./components/page/orderConfirmation/orderConfirmation";

function App() {
  const [shoppingCartList, setShoppingCartList] = useState([]);
  //   const [quantityCounter, setquantityCounter] = useState();
  function cart() {
    let shoppingQuantityCounter = 0;
    for (
      let i = 0;
      i < shoppingCartList.length && shoppingCartList.length;
      i++
    ) {
      shoppingQuantityCounter =
        shoppingQuantityCounter + parseInt(shoppingCartList[i].quantity);
    }
    return shoppingQuantityCounter;
  }
  let QuantityCounterTotal = cart();

  let localBase = new Localbase("db");
  useEffect(() => {
    localBase
      .collection("Products")
      .get()
      .then((product) => {
        setShoppingCartList(product);
      });
    // localBase
    // .collection("cart")
    // .add({cart:h})
    // .then((e) => {
    //   console.log(e)

    // });
  }, []);
  console.log(shoppingCartList);
  return (
    <UserProvider>
      <Router>
        <div className="App">
          <Nav QuantityCounterTotal={QuantityCounterTotal}></Nav>
          <main>
            <Switch>
              <Route exact path="/admin" component={Admin} />
              <Route exact path="/adminuser" component={AdminUser} />
              <ProfileRedirect exact path="/signup" component={Signup} />
              <ProfileRedirect exact path="/login" component={LogInUser} />
              <PrivateRoute exact path="/profile/:id" component={ProfileUser} />
              <Route exact path="/products" component={ProductsParent} />
              <Route
                exact
                path="/orderconfirmation/:id"
                component={OrderConfirmation}
              />
              <Route exact path="/checkout">
                <CheckOutParent
                  setShoppingCartList={setShoppingCartList}
                  shoppingCartList={shoppingCartList}
                />
              </Route>
              <Route path="/products/:id" component={DetailParent} />
              <Route exact path="/" component={Home} />
              <Route path="*" component={NoMatch} />
            </Switch>
          </main>
          <footer></footer>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
//https://www.youtube.com/watch?v=3ZEz-iposj8
//https://www.youtube.com/watch?v=v0TKYSkZ2tI
//https://firebase.google.com/docs/reference/js/firebase.database.Database
//https://www.youtube.com/watch?v=unr4s3jd9qA
//https://codepen.io/naturalclar/pen/zEwvbg
