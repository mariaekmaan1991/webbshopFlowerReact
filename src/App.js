import "./App.css";
import React, { useState, useEffect } from "react";
import { Admin } from "./components/Admin/Admin";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { firebase } from "./components/firebase/firebase";

import { ProductsParent } from "./components/ProductsParent/productsParent";
import { DetailParent } from "./components/DetailParent/DetailParent";
import { CheckOutParent } from "./components/checkOut/checkOutParent/checkOutParent";
function App() {
  /*const [currentCart, setCurrentCart] = useState();
  let currentCart2 = JSON.parse(localStorage.getItem("cart") || []);
  useEffect(() => {
    
    let hej =
      currentCart2 &&
      currentCart2.map((m) => {
        return {
          name: m.name,
          id: m.id,
          imageUrl: m.imageUrl,
          price: m.price,
          quantity: m.quantity,
          size: m.size,
        };
      });
    console.log("finns currentCart", hej);

    setCurrentCart(hej);
  }, []);*/
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
                <CheckOutParent></CheckOutParent>
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
