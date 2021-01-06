import { React, useState, useEffect, useReducer } from "react";
import Localbase from "localbase";

import { firebase } from "../firebase/firebase";
import { FormNewCustomer } from "./formNewCustomer/formNewCustomer";
import { ShoppingCart } from "./shoppingCart/shoppingCart";

export function CheckOutParent({ setShoppingCartList, ShoppingCartList }) {
  const db = firebase.firestore();
  console.log(ShoppingCartList, "finns ShoppingCartList");
  const [calendarUpdate, setSecondFormData] = useReducer((state, newstate) => ({
    ...state,
    ...newstate,
  }));
  function PostOrder() {
    let h = { basket: ShoppingCartList, calendarUpdate: calendarUpdate };
    db.collection("CustomerOrder")
      .add(h)
      .then(function () {
        console.log("Document successfully written!");
      });
  }

  console.log(calendarUpdate, "calendarUpdate");

  const [NewUpdateQuantityProduct, setNewUpdateQuantityProduct] = useState();
  const [NewUpdateSizeProduct, setNewUpdateSizeProduct] = useState();

  console.log(
    NewUpdateSizeProduct,
    "fgf",
    " NewUpdateQuantityProduct;",
    NewUpdateQuantityProduct
  );

  function saveInfo(e) {
    console.log(e, "hej");
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={saveInfo}>
        <ShoppingCart
          NewUpdateSizeProduct={NewUpdateSizeProduct}
          setShoppingCartList={setShoppingCartList}
          ShoppingCartList={ShoppingCartList}
          setNewUpdateQuantityProduct={setNewUpdateQuantityProduct}
          setNewUpdateSizeProduct={setNewUpdateSizeProduct}
          NewUpdateQuantityProduct={NewUpdateQuantityProduct}
        />
        <FormNewCustomer
          setSecondFormData={setSecondFormData}
        ></FormNewCustomer>

        <button
          type="submit"
          name="tröja"
          onClick={() => {
            PostOrder();
          }}
        >
          post
        </button>
      </form>
    </div>
  );
}
