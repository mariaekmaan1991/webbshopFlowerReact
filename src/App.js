import "./App.css";
import React from "react";
import { Admin } from "./components/Admin/Admin";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

import { Products } from "./components/ProductsParent/Products/Products";
import { ProductsParent } from "./components/ProductsParent/productsParent";
import { DetailParent } from "./components/DetailParent/DetailParent";
function App() {
  return (
    <div>
      <Router>
        <div>
          <header>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/admin">admin</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
                <li>
                  <Link to="/checkout">checkout</Link>
                </li>
              </ul>
            </nav>
          </header>
          <main>
            <Switch>
              <Route exact path="/admin">
                <Admin />
              </Route>

              <Route exact path="/products">
                <ProductsParent />
              </Route>
              <Route exact path="/checkout">
                {/* <Checkout></Checkout> */}
              </Route>
              <Route path="/products/:id">
                <DetailParent />
              </Route>
              <Route exact path="/">
                {/* <Home></Home> */}
              </Route>
              <Route path="*">{/* <NoMatch></NoMatch> */}</Route>
            </Switch>
          </main>
          <footer></footer>
        </div>
      </Router>
    </div>
  );
}
export default App;
//https://www.youtube.com/watch?v=3ZEz-iposj8
//https://www.youtube.com/watch?v=v0TKYSkZ2tI
//https://firebase.google.com/docs/reference/js/firebase.database.Database
