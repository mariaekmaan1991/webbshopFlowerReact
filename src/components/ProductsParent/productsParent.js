import React, { useEffect, useState } from "react";

import { firebase } from "../firebase/firebase";
import { ButtonProduct } from "./ButtonProduct";

import { Products } from "./Products/Products";

export function ProductsParent() {
  const [ListProduct, setListProduct2] = useState([]);
  const [ProductCategories, setProductCategories] = useState();
  const db = firebase.firestore();
  const getFlowerObject = async () => {
    const data = await db.collection("Product").get();

    let element =
      data &&
      data.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });

    setListProduct2(element);
  };
  useEffect(() => {
    getFlowerObject();
  }, []);

  function ProductCategoriesButtonFlower(e) {
    setProductCategories(e);
  }
  function ProductCategoriesButtonGreenPlant(e) {
    setProductCategories(e);
  }

  return (
    <div>
      <ButtonProduct
        ProductCategoriesButtonGreenPlant={ProductCategoriesButtonGreenPlant}
        ProductCategoriesButtonFlower={ProductCategoriesButtonFlower}
      ></ButtonProduct>
      <Products
        ListProduct={ListProduct}
        ProductCategories={ProductCategories}
        ProductCategoriesButtonGreenPlant={ProductCategoriesButtonGreenPlant}
        ProductCategoriesButtonFlower={ProductCategoriesButtonFlower}
      />
    </div>
  );
}
