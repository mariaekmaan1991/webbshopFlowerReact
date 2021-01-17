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

import { AdminUser } from "./components/page/adminUser/adminUser";
import { ProfileUser } from "./components/page/ProfileUser/ProfileUser";
import { AdminRoute } from "./route/AdminRoute";
import { ProfileRedirect } from "./route/ProfileRedirect";
import { PrivateRoute } from "./route/PrivateRoute";
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
    <UserProvider>
      <Router>
        <div className="App">
          <Header />
          <Nav />
          <main>
            <Switch>
              <AdminRoute exact path="/admin" component={Admin} />
              <AdminRoute exact path="/adminuser" component={AdminUser} />
              <ProfileRedirect exact path="/signup" component={Signup} />
              <ProfileRedirect exact path="/login" component={LogInUser} />
              <PrivateRoute exact path="/profile/:id" component={ProfileUser} />
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
