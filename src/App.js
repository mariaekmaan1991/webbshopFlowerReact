import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Admin } from "./components/Admin/Admin";

//import { Products } from "./components/products/Products";

function App() {
  return (
    <div className="App">
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
                {/* <Products></Products> */}
              </Route>
              <Route exact path="/checkout">
                {/* <Checkout></Checkout> */}
              </Route>
              <Route exact path="/products/:id">
                {/* <DetailProduct></DetailProduct> */}
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
