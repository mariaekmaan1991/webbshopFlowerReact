import { React, useState, useEffect, useReducer } from "react";
import Localbase from "localbase";

import { ShoppingCart } from "./shoppingCart/shoppingCart";
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

  function saveInfo(e) {
    e.preventDefault();
  }
  const db = firebase.firestore();
  function carts() {
    let cart = {
      basket: ShoppingCartList,
    };

    // db.collection("customerorder")
    //   .set(cart})
    //   .then(function () {
    //     console.log("Document successfully written!");
    //   }).catch(function (error) {
    //     console.log("Error getting document:", error);
    //   });
  }

  // function postFormValues(e) {
  //   let cart = {
  //     basket: ShoppingCartList,

  //   };
  
  //    console.log(cart , "cart cart")
  //     db.collection("customerorder")
  //       .add(cart)
  //       .then(function () {
  //         console.log("Document successfully written!");
  //       })
  //       .catch(function (error) {
  //         console.error("Error writing document: ", error);
  //       });
  // }

console.log(formDataCustomer)
const  sendOrder= async(e)=> {
   
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
        shoppingCart: ShoppingCartList,
  
      };

      console.log(cart , "cart cart")
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
      let passWord = "0000";
      const resp = await firebase
        .auth()
        .createUserWithEmailAndPassword(formDataCustomer.email, passWord);
     const user = resp.user;
      userInfo = {
        uid: user.uid,
        email: user.email,
        firstname: formDataCustomer.firstname,
        lastname: formDataCustomer.lastname,
        address: formDataCustomer.address,
        phone: formDataCustomer.phone,
        zipcode: formDataCustomer.zipcode,
        member: false,
      };

      db.collection("User")
        .add(userInfo)
        .then(function () {
          console.log("Document successfully written!");
        });
        let cart2 = {
          uid: user.uid,
          email: user.email,
          shoppingCart: ShoppingCartList,
    
        };
        console.log(cart2 , "cart cart")
        db.collection("customerorder")
        .add(cart2)
        .then(function () {
          console.log("Document successfully written!");
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });
    }
   
  
     
  }


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


        {/* <button
                className="Form-Admin-Button"
                type="submit"
                name="esy"
                onClick={(e) => {
                  postFormValues(e
                  
                  );
                }}
              >
               post
              </button> */}
              <button
                className="Form-Admin-Button"
                type="submit"
                name="esy"
                onClick={(e) => {
                  sendOrder(e
                  
                  );
                }}
              >
              sendOrder
              </button>
      </form>
    </div>
  );
}
