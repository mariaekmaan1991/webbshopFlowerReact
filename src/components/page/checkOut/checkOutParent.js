import { React, useState, useEffect, useReducer } from "react";
import Localbase from "localbase";

import { firebase } from "../../../firebase/config";
import { ShoppingCart } from "./shoppingCart/shoppingCart";
import { SignUpNoMember } from "../SignUpNoMember/SignUpNoMember";
import { Signup } from "../SignUp/Signup";

export function CheckOutParent({ setShoppingCartList, ShoppingCartList }) {
  const db = firebase.firestore();
  console.log(ShoppingCartList, "finns ShoppingCartList");

  const [FormDataCustomerMember, setFormDataCustomerMember] = useState(false);

  function formForTheCustomerMember(e) {
    if (FormDataCustomerMember !== false) {
      setFormDataCustomerMember(false);
    } else {
      setFormDataCustomerMember(true);
    }
  }

  const [NewUpdateQuantityProduct, setNewUpdateQuantityProduct] = useState();
  const [NewUpdateSizeProduct, setNewUpdateSizeProduct] = useState();

  console.log(
    NewUpdateSizeProduct,
    "fgf",
    " NewUpdateQuantityProduct;",
    NewUpdateQuantityProduct
  );

  // function saveInfo(e) {
  //   console.log(e, "hej");
  //   e.preventDefault();
  // }
  function PostOrder() {
    let h = {
      basket: ShoppingCartList,
      FormDataCustomerMember: FormDataCustomerMember,
    };
    db.collection("CustomerOrder")
      .add(h)
      .then(function () {
        console.log("Document successfully written!");
      });
  }

  return (
    <div>
      <form
        // onSubmit={saveInfo}
        className="Form-ShoppingCart-Main-Content-Container"
      >
        <ShoppingCart
          NewUpdateSizeProduct={NewUpdateSizeProduct}
          setShoppingCartList={setShoppingCartList}
          ShoppingCartList={ShoppingCartList}
          setNewUpdateQuantityProduct={setNewUpdateQuantityProduct}
          setNewUpdateSizeProduct={setNewUpdateSizeProduct}
          NewUpdateQuantityProduct={NewUpdateQuantityProduct}
        />

        {/* <button
          type="submit"
          name="tröja"
          onClick={() => {
            PostOrder();
          }}
        >
          post
        </button> */}
        <input
          type="checkbox"
          onChange={(e) => formForTheCustomerMember(e, "Member")}
        />

        {/* {FormDataCustomerMember === true ? (
          <Signup
            ShoppingCartList={ShoppingCartList}
            FormDataCustomerMember={FormDataCustomerMember}
          />
        ) : (
          <SignUpNoMember
            ShoppingCartList={ShoppingCartList}
            FormDataCustomerMember={FormDataCustomerMember}
          />
        )} */}
      </form>
    </div>
  );
}
