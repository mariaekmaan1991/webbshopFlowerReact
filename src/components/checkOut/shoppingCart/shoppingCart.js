import { React, useState, useEffect } from "react";
import Localbase from "localbase";
export function ShoppingCart() {
  let localBase = new Localbase("db");

  const [ShoppingCartList, setShoppingCartList] = useState([]);
  useEffect(() => {
    localBase
      .collection("users")
      .get()
      .then((users) => {
        //console.log("users:", users);
        setShoppingCartList(users);
      });
  }, []);

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

  function updateProduct(id) {
    localBase
      .collection("users")
      .doc({ id: id })
      .update({
        name: "William",
      })
      .then((users) => {
        console.log("fel?", users);
      });
  }

  let h = ShoppingCartList.map((product, id) => {
    return (
      <div key={id}>
        <div>{product.imageUrl}</div>
        <div>{product.name}</div>
        <div>{product.price}</div>
        <div>{product.description}</div>

        <button
          type="submit"
          name="tröja"
          onClick={() => {
            updateProduct(product.id);
          }}
        >
          uptatera
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
