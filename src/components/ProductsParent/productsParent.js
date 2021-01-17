import React, { useEffect, useState } from "react";

import { firebase } from "../../firebase/config";
import { ButtonProduct } from "./ButtonProduct";

import { Products } from "./Products/Products";

export function ProductsParent() {
  const [listProduct, setListProduct] = useState([]);
  const [productCategorieSelect, setProductCategorieSelect] = useState();

  useEffect(() => {
    const db = firebase.firestore();
    (async () => {
      const snapshot = await db.collection("Product").get();
      const booksArray = [];
      snapshot.forEach((doc) => {
        booksArray.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setListProduct(booksArray);
    })();
  }, []);

  console.log(listProduct);
  /*
  useEffect(() => {
    firebase
      .firestore()
      .collection("Product")
      .onSnapshot((snapshot) => {
        setListProduct(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      });
  }, []);
*/
  console.log(listProduct);
  function ProductCategoriesButtonFlower(e) {
    setProductCategorieSelect(e);
  }
  function ProductCategoriesButtonGreenPlant(e) {
    setProductCategorieSelect(e);
  }
  return (
    <div>
      <ButtonProduct
        ProductCategoriesButtonGreenPlant={ProductCategoriesButtonGreenPlant}
        ProductCategoriesButtonFlower={ProductCategoriesButtonFlower}
      ></ButtonProduct>
      <Products
        listProduct={listProduct}
        productCategorieSelect={productCategorieSelect}
        ProductCategoriesButtonGreenPlant={ProductCategoriesButtonGreenPlant}
        ProductCategoriesButtonFlower={ProductCategoriesButtonFlower}
      />
    </div>
  );
}

// useEffect(() => {
//   firebase
//     .firestore()
//     .collection("Product")
//     .onSnapshot((snapshot) => {
//       setListProduct(
//         snapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }))
//       );
//     });
// }, []);
