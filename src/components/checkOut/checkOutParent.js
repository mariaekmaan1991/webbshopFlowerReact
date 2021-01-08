import { React, useState, useEffect, useReducer } from "react";
import Localbase from "localbase";

import { firebase } from "../firebase/firebase";
import { FormNewCustomer } from "./formNewCustomer/formNewCustomer";
import { ShoppingCart } from "./shoppingCart/shoppingCart";

export function CheckOutParent({ setShoppingCartList, ShoppingCartList }) {
  const db = firebase.firestore();
  console.log(ShoppingCartList, "finns ShoppingCartList");
  const [FormDataCustomer, setFormDataCustomer] = useReducer(
    (state, newstate) => ({
      ...state,
      ...newstate,
    })
  );
  const [FormDataCustomerMember, setFormDataCustomerMember] = useState(false);

  function formForTheCustomer(e, id) {
    setFormDataCustomer({ [id]: e.target.value });
  }

  function formForTheCustomerMember(e) {
    if (FormDataCustomerMember !== false) {
      setFormDataCustomerMember(false);
    } else {
      setFormDataCustomerMember(true);
    }
  }

  function PostOrder() {
    let h = {
      basket: ShoppingCartList,
      FormDataCustomer: FormDataCustomer,
      FormDataCustomerMember: FormDataCustomerMember,
    };
    db.collection("CustomerOrder")
      .add(h)
      .then(function () {
        console.log("Document successfully written!");
      });
  }

  console.log(FormDataCustomer, "FormDataCustomer");

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
    <form onSubmit={saveInfo} className="Form-ShoppingCart-Content-Container">
      <ShoppingCart
        NewUpdateSizeProduct={NewUpdateSizeProduct}
        setShoppingCartList={setShoppingCartList}
        ShoppingCartList={ShoppingCartList}
        setNewUpdateQuantityProduct={setNewUpdateQuantityProduct}
        setNewUpdateSizeProduct={setNewUpdateSizeProduct}
        NewUpdateQuantityProduct={NewUpdateQuantityProduct}
      />
      <FormNewCustomer
        formForTheCustomerMember={formForTheCustomerMember}
        FormDataCustomerMember={FormDataCustomerMember}
        FormDataCustome={FormDataCustomer}
        setFormDataCustomera={setFormDataCustomer}
        formForTheCustomer={formForTheCustomer}
      />

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
  );
}
