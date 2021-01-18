import React, { useEffect, useState } from "react";

import { firebase } from "../../../firebase/config";
import { ProductroductCategoryButton } from "./ProductroductCategoryButton/ProductroductCategoryButton";

import { Products } from "./Products/Products";

export function ProductsParent() {
  const [listProduct, setListProduct] = useState([]);
  const [productCategorieSelect, setProductCategorieSelect] = useState(
    "accessories"
  );

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

  console.log(listProduct);
  function ProductCategoriesButtonFlower(e) {
    setProductCategorieSelect(e);
  }
  function ProductCategoriesButtonGreenPlant(e) {
    setProductCategorieSelect(e);
  }
  return (
    <div>
      <ProductroductCategoryButton
        ProductCategoriesButtonGreenPlant={ProductCategoriesButtonGreenPlant}
        ProductCategoriesButtonFlower={ProductCategoriesButtonFlower}
      />
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

//https://gronvaxtriket.se/wp-content/uploads/2020/11/IMG_2390-scaled.jpg
