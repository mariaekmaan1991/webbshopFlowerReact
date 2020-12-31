import { React, useState, useEffect } from "react";
import Localbase from "localbase";
import ReactSelect from "react-select";
import { Size } from "../select/select";

export function ShoppingCart() {
  let localBase = new Localbase("db");

  const [ShoppingCartList, setShoppingCartList] = useState([]);

  const [ProductSize, setProductSize] = useState();

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

  function fromProductSize(e, product) {
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

  // eslint-disable-next-line react-hooks/exhaustive-deps

  let h = ShoppingCartList.map((product, i = parseInt(product.id)) => {
    return (
      <div key={i}>
        <div>{product.imageUrl}</div>
        <div>{product.name}</div>
        <div>{product.price}</div>
        <div>{product.description}</div>
        <div>
          <Size size={product.size} />
        </div>

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
