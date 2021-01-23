import { React, useState, useEffect, useReducer } from "react";
import Localbase from "localbase";

import { ShoppingCart } from "./shoppingCart/shoppingCart";
import { FormCheckOutOrder } from "./formCheckOutOrder/formCheckOutOrder";
import { firebase } from "../../../firebase/config";
export function CheckOutParent({ setShoppingCartList, shoppingCartList }) {
  console.log(shoppingCartList, "finns shoppingCartList");
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

  const [newUpdateQuantityProduct, setNewUpdateQuantityProduct] = useState();
  const [newUpdateSizeProduct, setNewUpdateSizeProduct] = useState();

  function saveInfo(e) {
    e.preventDefault();
  }
  const db = firebase.firestore();

  const sendOrder = async (e) => {
    let userInfo;
    if (formCustomerMemberValue === true) {
      const res = await firebase
        .auth()
        .createUserWithEmailAndPassword(
          formDataCustomer.email,
          formDataCustomer.password
        );
      const user = res.user;
      userInfo = {
        uid: user.uid,
        email: user.email,
        firstname: formDataCustomer.firstname,
        lastname: formDataCustomer.lastname,
        address: formDataCustomer.address,
        phone: formDataCustomer.phone,
        zipcode: formDataCustomer.zipcode,
        member: formCustomerMemberValue,
      };

      let cart = {
        uid: user.uid,
        email: user.email,
        shoppingCart: shoppingCartList,
      };

      console.log(cart, "cart cart");
      db.collection("customerorder")
        .add(cart)
        .then(function () {
          console.log("Document successfully written!");
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });

      db.collection("User")
        .add(userInfo)
        .then(function () {
          console.log("Document successfully written!");
        });
    } else {
      let password = "6777868678";
      const resp = await firebase
        .auth()
        .createUserWithEmailAndPassword(formDataCustomer.email, password);
      const user = resp.user;
      userInfo = {
        uid: user.uid,
        email: user.email,
        firstname: formDataCustomer.firstname,
        lastname: formDataCustomer.lastname,
        address: formDataCustomer.address,
        phone: formDataCustomer.phone,
        zipcode: formDataCustomer.zipcode,
      };
      let carts = {
        uid: user.uid,
        email: user.email,
        shoppingCart: shoppingCartList,
      };

      db.collection("User")
        .add(userInfo)
        .then(function () {
          console.log("Document successfully written!");
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });

      console.log(carts, "cart cart");
      db.collection("customerorder")
        .add(carts)
        .then(function () {
          console.log("Document successfully written!");
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });
    }
  };

  return (
    <form
      onSubmit={saveInfo}
      className="Form-ShoppingCart-Main-Content-Container"
    >
      <ShoppingCart
        newUpdateSizeProduct={newUpdateSizeProduct}
        setShoppingCartList={setShoppingCartList}
        shoppingCartList={shoppingCartList}
        setNewUpdateQuantityProduct={setNewUpdateQuantityProduct}
        setNewUpdateSizeProduct={setNewUpdateSizeProduct}
        newUpdateQuantityProduct={newUpdateQuantityProduct}
      />
      <FormCheckOutOrder
        formCustomerMemberValue={formCustomerMemberValue}
        formTheCustomer={formTheCustomer}
        formCustomerMember={formCustomerMember}
      />

      <button
        className="Form-Admin-Button"
        type="submit"
        name="esy"
        onClick={(e) => {
          sendOrder(e);
        }}
      >
        sendOrder
      </button>
    </form>
  );
}
