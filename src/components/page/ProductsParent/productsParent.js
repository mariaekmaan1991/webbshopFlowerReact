import React, { useEffect, useState } from "react";

import { firebase } from "../../../firebase/config";
import { ProductroductCategoryButton } from "./ProductroductCategoryButton/ProductroductCategoryButton";

import { Products } from "./Products/Products";

export function ProductsParent() {
  const [listProduct, setListProduct] = useState([]);
  // const [productCategorieSelect, setProductCategorieSelect] = useState([
  //   { category: "Pots" },
  // ]);

  const [productCategorieSelect, setProductCategorieSelect] = useState({
    category: "Pots",
  });

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

  function ProductCategoriesButton(e) {
    setProductCategorieSelect(e);
  }
  // function ProductCategoriesButton(e) {
  //   setProductCategorieSelect([...productCategorieSelect, e]);
  // }

  return (
    <div>
      <ProductroductCategoryButton
        ProductCategoriesButton={ProductCategoriesButton}
        // ProductCategoriesButtonSet={ProductCategoriesButtonSet}
        // ProductCategoriesButtonGreenPlant={ProductCategoriesButtonGreenPlant}
        // ProductCategoriesButtonFlower={ProductCategoriesButtonFlower}
      />
      <Products
        listProduct={listProduct}
        productCategorieSelect={productCategorieSelect}
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
