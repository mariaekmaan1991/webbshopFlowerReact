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
import { firebase } from "../../../firebase/config";

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
    const data = await db.collection("Product").get();

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

  const [productImageUrl, setProductImageUrl] = useState();
  const [productName, setProductName] = useState();
  const [productPrice, setProductprice] = useState();

  const [productQuantity, setFormProductQuantity] = useState();
  const [descriptionProduct, setFromDescriptionProduct] = useState();

  const [categoryProduct, setCategoryProduct] = useState([]);

  console.log(categoryProduct);
  function formCategoryProduct(text) {
    setCategoryProduct([...categoryProduct, text]);
  }

  useEffect(() => {
    if (updateFormValues.quantity) {
      setFormProductQuantity(updateFormValues.quantity);
    }
    if (updateFormValues.description) {
      setFromDescriptionProduct(updateFormValues.description);
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

  function formDescriptionProduct(e) {
    if (updateFormValues.description === undefined) {
      setFromDescriptionProduct(e.target.value);
    } else {
      setFromDescriptionProduct(
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
      name: productName,
      description: descriptionProduct,
      price: productPrice,
      imageUrl: productImageUrl,
      id: updateFormValues.id,
      quantity: productQuantity,
      category: categoryProduct,
    };

    return h;
  }

  function formValuePost() {
    // let resultCategory = category(text);
    let h = {
      name: productName,
      description: descriptionProduct,
      price: productPrice,
      imageUrl: productImageUrl,
      quantity: productQuantity,
      category: categoryProduct,
    };

    return h;
  }

  function postFormValues() {
    let hej = formValuePost();
    let updateform = updateFormValue();
    console.log(hej);
    let id = updateFormValues.id;
    if (updateFormValues.id === undefined) {
      db.collection("Product")
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
      db.collection("Product").doc(id).set(updateform);

      // const db = firebase.database().ref("flowrshops").child(updateform.id);
      // db.update(updateform);
    }
  }

  /// button deleteProduct
  function deleteProduct(id) {
    console.log(id, "ta bort product");
    db.collection("Product").doc(id).delete();
    /*  const db = firebase.database().ref("flowrshops").child(id);
    db.remove();*/
  }

  /// button deleteProduct

  return (
    <React.Fragment>
      <FromProduct
        fromProductQuantity={fromProductQuantity}
        productQuantity={productQuantity}
        productImageUrl={productImageUrl}
        formProductPrice={formProductPrice}
        formProductImageUrl={formProductImageUrl}
        productPrice={productPrice}
        productName={productName}
        saveInfo={saveInfo}
        postFormValues={postFormValues}
        formProductName={formProductName}
        descriptionProduct={descriptionProduct}
        formDescriptionProduct={formDescriptionProduct}
        formCategoryProduct={formCategoryProduct}
      />
      <AdminDisplayProducts
        ListProduct={ListProduct}
        deleteProduct={deleteProduct}
        saveUpdate={saveUpdate}
        setUpdateFormValues={setUpdateFormValues}
      />
    </React.Fragment>
  );
}
