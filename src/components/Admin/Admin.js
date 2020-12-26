import React, {
  ChangeEvent,
  FormEvent,
  useReducer,
  useEffect,
  useState,
} from "react";
import _ from "lodash";
import axios from "axios";

import { AdminDisplayProducts } from "./AdminDisplayProducts/AdminDisplayProducts";
import { FromProduct } from "./FormProduct/FormProduct";
import { firebase } from "../firebase/firebase";

export class Product {
  name = "";
  price = "";
  description = "";
  imageUrl = "";
  category = "";
}

export function Admin() {
  function saveInfo(e) {
    //console.log(e, "hej");
    e.preventDefault();
  }

  const [ListProduct, setListProduct] = useState([]);
  const db = firebase.firestore();

  // function getflower() {
  //   // const db = firebase.firestore().collection("Flowershops");
  //   const db = firebase.database().ref("flowrshops");
  //   db.on("value", (QuerySnapshot) => {
  //     let element = QuerySnapshot.val();
  //     const todoList = [];
  //     for (let id in element) {
  //       todoList.push({ id, ...element[id] });
  //     }

  //     setListProduct(todoList);
  //   });
  // }
  const getFlowerObject = async () => {
    const data = await db.collection("maria").get();

    let element =
      data &&
      data.docs.map((doc) => {
        console.log(doc);
        return { ...doc.data(), id: doc.id };
      });
    console.log(element);

    setListProduct(element);
  };
  useEffect(() => {
    getFlowerObject();
  }, []);

  /// Form  put
  const [updateFormValues, setUpdateFormValues] = useState({});

  const [ProductImageUrl, setProductImageUrl] = useState();
  const [ProductName, setProductName] = useState();
  const [ProductPrice, setProductprice] = useState();
  const [ProductDescription, setProductDescription] = useState();
  const [ProductQuantity, setFormProductQuantity] = useState();
  useEffect(() => {
    if (updateFormValues.quantity) {
      setFormProductQuantity(updateFormValues.quantity);
    }
    if (updateFormValues.description) {
      setProductDescription(updateFormValues.description);
    }
    if (updateFormValues.imageUrl) {
      setProductImageUrl(updateFormValues.imageUrl);
    }
    if (updateFormValues.price) {
      setProductprice(updateFormValues.price);
    }
    if (setProductName(updateFormValues.name)) {
      setProductName(updateFormValues.name);
    }
  }, [
    updateFormValues.quantity,
    updateFormValues.description,
    updateFormValues.name,
    updateFormValues.imageUrl,
    updateFormValues.price,
  ]);

  function formProductPrice(e) {
    if (updateFormValues.price === undefined) {
      setProductprice(e.target.value);
    } else {
      setProductprice(({ ...updateFormValues.price }, e.target.value));
    }
  }

  function formProductImageUrl(e) {
    if (updateFormValues.imageUrl === undefined) {
      setProductImageUrl(e.target.value);
    } else {
      setProductImageUrl(({ ...updateFormValues.imageUrl }, e.target.value));
    }
  }

  function formProductDescription(e) {
    if (updateFormValues.description === undefined) {
      setProductDescription(e.target.value);
    } else {
      setProductDescription(
        ({ ...updateFormValues.description }, e.target.value)
      );
    }
  }

  function fromProductQuantity(e) {
    if (updateFormValues.quantity === undefined) {
      setFormProductQuantity(e.target.value);
    } else {
      setFormProductQuantity(
        ({ ...updateFormValues.quantity }, e.target.value)
      );
    }
  }

  function formProductName(e) {
    if (updateFormValues.name === undefined) {
      setProductName(e.target.value);
    } else {
      setProductName(({ ...updateFormValues.name }, e.target.value));
    }
  }

  function saveUpdate(e) {
    e.preventDefault();
  }

  // function category(text) {
  //   console.log(text);
  //   return text;
  // }

  function updateFormValue() {
    // let resultCategory = category(text);
    let h = {
      name: ProductName,
      description: ProductDescription,
      price: ProductPrice,
      imageUrl: ProductImageUrl,
      id: updateFormValues.id,
      quantity: ProductQuantity,
    };

    return h;
  }

  function formValuePost() {
    // let resultCategory = category(text);
    let h = {
      name: ProductName,
      description: ProductDescription,
      price: ProductPrice,
      imageUrl: ProductImageUrl,
      quantity: ProductQuantity,

      //category: resultCategory,
    };

    return h;
  }

  function postFormValues() {
    let hej = formValuePost();
    let updateform = updateFormValue();
    let id = updateFormValues.id;
    if (updateFormValues.id === undefined) {
      db.collection("maria")
        .add(hej)
        .then(function () {
          console.log("Document successfully written!");
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });

      // const db = firebase.database().ref("flowrshops");
      // db.push(hej);
    } else {
      console.log(updateform, "uptatera");
      db.collection("maria").doc(id).set(updateform);

      // const db = firebase.database().ref("flowrshops").child(updateform.id);
      // db.update(updateform);
    }
  }

  /// button deleteProduct
  function deleteProduct(id) {
    console.log(id, "ta bort product");
    db.collection("maria").doc(id).delete();
    /*  const db = firebase.database().ref("flowrshops").child(id);
    db.remove();*/
  }

  /// button deleteProduct

  return (
    <div>
      <FromProduct
        fromProductQuantity={fromProductQuantity}
        ProductQuantity={ProductQuantity}
        ProductImageUrl={ProductImageUrl}
        formProductPrice={formProductPrice}
        formProductImageUrl={formProductImageUrl}
        formProductDescription={formProductDescription}
        ProductPrice={ProductPrice}
        ProductName={ProductName}
        ProductDescription={ProductDescription}
        saveInfo={saveInfo}
        postFormValues={postFormValues}
        formProductName={formProductName}
        //category={category}
      />
      <AdminDisplayProducts
        ListProduct={ListProduct}
        deleteProduct={deleteProduct}
        saveUpdate={saveUpdate}
        setUpdateFormValues={setUpdateFormValues}
        formProductImageUrl={formProductImageUrl}
        formProductDescription={formProductDescription}
        formProductPrice={formProductPrice}
        formProductName={formProductName}
      />
    </div>
  );
}
