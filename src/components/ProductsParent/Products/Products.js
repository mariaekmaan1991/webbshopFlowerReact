import { React, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

export function Products({
  ListProduct,
  setbuttonDetailProduct,
  ProductCategories,
  ProductCategoriesButtonGreenPlant,
  ProductCategoriesButtonFlower,
}) {
  console.log(ProductCategories);

  let productList =
    ListProduct &&
    ListProduct.map((data, id) => {
      id = data._id;
      // if (data.category === ProductCategories) {
      return (
        <div className="Product-Content" key={id}>
          <Link to={"/products/" + data.id}>
            <img className="Product-Image" src={data.imageUrl} alt="" />
            <div className="Product-Content-Text">
              <div className="Product-Content-Name">{`name: ${data.name}`}</div>
              <div className="Product-Content-Price">{`price: ${data.price}`}</div>
            </div>
          </Link>
        </div>
      );
    });
  return <div className="Product-Content-List">{productList}</div>;
}
//https://codesandbox.io/s/react-router-nesting-forked-3b6h7?file=/example.js
