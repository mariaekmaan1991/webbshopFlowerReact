import { React, useState, useEffect } from "react";
import Localbase from "localbase";
export function ShoppingCart() {
  let localBase = new Localbase("db");

  const [ShoppingCartList, setShoppingCartList] = useState([]);

  const [ProductSize, setProductSize] = useState([]);
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

  function handleProductSize(e, product) {
    console.log(e.target.value, product);
    setProductSize({ ...product }, e.target.value);

    // localBase
    //   .collection("users")
    //   .doc({ id: id })
    //   .update({
    //     name: "William",
    //   })
    //   .then((users) => {
    //     console.log("fel?", users);
    //   });
  }
  function updateProduct() {}

  let h = ShoppingCartList.map((product, i = parseInt(product.id)) => {
    return (
      <div key={i}>
        <div>{product.imageUrl}</div>
        <div>{product.name}</div>
        <div>{product.price}</div>
        <div>{product.description}</div>
        <div> {ProductSize}</div>
        <select onChange={handleProductSize} name="size" id="size">
          <option value={`XS${product.size}`}>XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
        </select>

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

//https://codesandbox.io/s/keen-sun-qp9rb?file=/src/index.js
