import React, { useState, useEffect } from "react";
import { Admin } from "./components/Admin/Admin";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

import { ProductsParent } from "./components/ProductsParent/productsParent";
import { DetailParent } from "./components/DetailParent/DetailParent";
import { CheckOutParent } from "./components/checkOut/checkOutParent";
import { Home } from "./components/Home/home";
import { NoMatch } from "./components/NoMatch/NoMatch";

import { AuthProvider } from "./components/Home/auth";
import LogIn from "./components/Home/login";
import { SignUp } from "./components/Home/signUp";
import PrivateRoute from "./components/privateRoute/privateRoute";

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
    <div>
      <AuthProvider>
        <Router>
          <div>
            <header>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>

                  <li>
                    <Link to="/products">Products</Link>
                  </li>
                  <li>
                    <Link to="/checkout">checkout</Link>
                  </li>
                  <li>
                    <Link to="/login">log in</Link>
                  </li>
                  <li>
                    <Link to="/signup">sign up</Link>
                  </li>
                </ul>
                varukorg:{shoppingCartQuantityCounter}
                summa:{counterPrice}
              </nav>
            </header>
            <main>
              <Switch>
                <Route exact path="/signup" component={SignUp} />
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
        </Router>
      </AuthProvider>
    </div>
  );
}
export default App;
//https://www.youtube.com/watch?v=3ZEz-iposj8
//https://www.youtube.com/watch?v=v0TKYSkZ2tI
//https://firebase.google.com/docs/reference/js/firebase.database.Database
//https://www.youtube.com/watch?v=unr4s3jd9qA
