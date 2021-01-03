import { React, useState, useEffect } from "react";
import Localbase from "localbase";
import { ProductChangeSize } from "../ProductChangeSize/ProductChangeSize";

import { ProductChangeProductQuantity2 } from "../ProductChangeProductQuantity/ProductChangeProductQuantity2";

export function ShoppingCart({
  setNewUpdateSizeProduct,
  setShoppingCartList,
  ShoppingCartList,
  NewUpdateQuantityProduct,
  NewUpdateSizeProduct,
  setNewUpdateQuantityProduct,
}) {
  let localBase = new Localbase("db");

  function updateSizeProduct(x) {
    setNewUpdateSizeProduct(x);
  }

  function updateQuantityProduct(x) {
    setNewUpdateQuantityProduct(x);
  }
  console.log(NewUpdateQuantityProduct, " NewUpdateQuantityProduct");
  useEffect(() => {
    localBase
      .collection("Product")
      .get()
      .then((product) => {
        setShoppingCartList(product);
      });
  }, []);

  function UpdateProduct(product) {
    localBase
      .collection("Product")
      .doc({ id: product.id })
      .update({
        size: NewUpdateSizeProduct,
        quantity: parseInt(NewUpdateQuantityProduct),
      })
      .then((product) => {
        console.log("fel?", product);
      });
  }

  function deleteProduct(id) {
    console.log(id);
    localBase
      .collection("users")
      .doc({ id: id })
      .delete()
      .then((users) => {
        console.log("fel?", users);
      });
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps

  let h = ShoppingCartList.map((product, i = parseInt(product.id)) => {
    return (
      <div key={i}>
        <div>{product.imageUrl}</div>
        <div>{product.name}</div>
        <div>price:{product.price}</div>
        <div>{product.description}</div>
        <div> antal:{product.quantity}</div>

        <div>
          <ProductChangeSize
            updateSizeProduct={updateSizeProduct}
            size={product.size}
          />
          {/* <ProductChangeProductQuantity
            productQuantity={product.quantity}
            productid={product.id}
            something2={updateIpsumNumber2}
          /> */}
          <ProductChangeProductQuantity2
            updateQuantityProduct={updateQuantityProduct}
            productquantity={product.quantity}
          />
        </div>
        <button
          type="submit"
          name="tröja"
          onClick={() => {
            UpdateProduct(product);
          }}
        >
          update
        </button>

        <button
          type="submit"
          name="tröja"
          onClick={() => {
            deleteProduct(product.id);
          }}
        >
          radera
        </button>
      </div>
    );
  });
  return <div>{h}</div>;
}
// har en fråga hur gör man
//https://codesandbox.io/s/keen-sun-qp9rb?file=/src/index.js
