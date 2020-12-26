import { React, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

export function Products({ ListProduct, setbuttonDetailProduct }) {
  let productList =
    ListProduct &&
    ListProduct.map((data, id) => {
      id = data._id;
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
    });

  return (
    <div>
      <h1>sss</h1>
      <div>{productList}</div>
    </div>
  );
}
//https://codesandbox.io/s/react-router-nesting-forked-3b6h7?file=/example.js
