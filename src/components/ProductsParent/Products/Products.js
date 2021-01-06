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
      if (data.category === ProductCategories) {
        return (
          <div>
            <Link to={"/products/" + data.id}>
              Dina
              <img src={data.imageUrl} alt="" />
              <h1 key={id}>{data.name}</h1>
              <h1>{data.price}</h1> hihih
              <div>{`name: ${data.name}`}</div>
              <div>{`price: ${data.price}`}</div>
              <div>{`description: ${data.description}`}</div>
              <div>{`id: ${data.id}`}</div>
            </Link>
          </div>
        );
      }
    });

  return (
    <div>
      <button
        className="Form-Admin-Button"
        type="submit"
        name="flower"
        onClick={() => {
          ProductCategoriesButtonFlower("flower");
        }}
      >
        Blommor
      </button>
      <button
        className="Form-Admin-Button"
        type="submit"
        name="Grönväxt"
        onClick={() => {
          ProductCategoriesButtonGreenPlant("greenPlant");
        }}
      >
        Grön växter
      </button>

      <div>{productList}</div>
    </div>
  );
}
//https://codesandbox.io/s/react-router-nesting-forked-3b6h7?file=/example.js
