import { React, useState, useEffect, useReducer } from "react";
import Localbase from "localbase";

import { ShoppingCart } from "./shoppingCart/shoppingCart";
import { SignUpNoMember } from "../SignUpNoMember/SignUpNoMember";
import { Signup } from "../SignUp/Signup";
import { FormCheckOutOrder } from "./formCheckOutOrder./formCheckOutOrder";
import { firebase } from "../../../firebase/config";
export function CheckOutParent({ setShoppingCartList, ShoppingCartList }) {
  console.log(ShoppingCartList, "finns ShoppingCartList");
  const [formDataCustomer, setFormDataCustomer] = useReducer(
    (state, newstate) => ({
      ...state,
      ...newstate,
    })
  );
  const [formCustomerMemberValue, setFormDataCustomerMemberValue] = useState(
    false
  );

  function formTheCustomer(e, id) {
    setFormDataCustomer({ [id]: e.target.value });
  }

  function formCustomerMember(e) {
    if (formCustomerMemberValue) {
      setFormDataCustomerMemberValue(false);
    } else {
      setFormDataCustomerMemberValue(true);
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
  function saveInfo(e) {
    e.preventDefault();
  }
  const db = firebase.firestore();
  // function carts() {
  //   let cart = {
  //     basket: ShoppingCartList,
  //   };

  //   db.collection("CustomerOrder")
  //     .set(cart)
  //     .then(function () {
  //       console.log("Document successfully written!");
  //     });
  // }

  // function sendOrder() {
  //   let userInfo;

  //   if (formCustomerMemberValue === true) {
  //     const resp = firebase
  //       .auth()
  //       .createUserWithEmailAndPassword(
  //         formDataCustomer.email,
  //         formDataCustomer.password
  //       );
  //     const user = resp.user;
  //     userInfo = {
  //       uid: user.uid,
  //       email: user.email,
  //       firstname: formDataCustomer.firstname,
  //       lastname: formDataCustomer.lastname,
  //       addresss: formDataCustomer.addresss,
  //       phone: formDataCustomer.phone,
  //       zip: formDataCustomer.zip,
  //       member: formCustomerMemberValue,
  //     };
  //   } else {
  //     let password = "0000";
  //     const resp = firebase
  //       .auth()
  //       .createUserWithEmailAndPassword(formDataCustomer.email, password);
  //     const user = resp.user;
  //     userInfo = {
  //       uid: user.uid,
  //       email: user.email,
  //       firstname: formDataCustomer.firstname,
  //       lastname: formDataCustomer.lastname,
  //       addresss: formDataCustomer.addresss,
  //       phone: formDataCustomer.phone,
  //       zip: formDataCustomer.zip,
  //       member: false,
  //     };

  //     db.collection("User")
  //       .add(userInfo)
  //       .then(function () {
  //         console.log("Document successfully written!");
  //       });
  //   }
  // }
  return (
    <div>
      <form
        onSubmit={saveInfo}
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
        <FormCheckOutOrder
          formCustomerMemberValue={formCustomerMemberValue}
          formTheCustomer={formTheCustomer}
          formCustomerMember={formCustomerMember}
        />

        {/* <button type="submit" name="tröja" onClick>
          post
        </button> */}
      </form>
    </div>
  );
}
