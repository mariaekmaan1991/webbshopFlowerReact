import { React, useState, useEffect } from "react";
import Localbase from "localbase";
import { ProductChangeSize } from "../ProductChangeSize/ProductChangeSize";
import { ProductChangeProductQuantity } from "../ProductQuantity/ProductChangeProductQuantity";

export function ShoppingCart() {
  let localBase = new Localbase("db");
  const [ipsumNumber, setIpsumNumber] = useState();

  function updateIpsumNumber(x) {
    setIpsumNumber(x);
  }
  console.log(ipsumNumber, "ipsumNumber");

  const [ipsumNumber2, setIpsumNumber2] = useState();

  function updateIpsumNumber2(x) {
    setIpsumNumber2(x);
  }
  console.log(ipsumNumber2, "ipsumNumber2");

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

  function UpdateProduct(product) {
    localBase
      .collection("users")
      .doc({ id: product.id })
      .update(product)
      .then((users) => {
        console.log("fel?", users);
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
        <div>{product.price}</div>
        <div>{product.description}</div>
        {/* <div> antal:{product.quantity}</div> */}

        <div>
          <ProductChangeSize
            something={updateIpsumNumber}
            size={product.size}
            // ProductSize={ProductSize}
            // setProductSize={setProductSize}
            // fromProductSize={fromProductSize}
          />
          <ProductChangeProductQuantity
            productQuantity={product.quantity}
            productid={product.id}
            something2={updateIpsumNumber2}
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
