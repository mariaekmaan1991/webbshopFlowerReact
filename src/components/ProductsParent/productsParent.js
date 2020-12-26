import React, { useEffect, useState } from "react";

import { firebase } from "../firebase/firebase";
import { Products } from "./Products/Products";

export function ProductsParent() {
  const [ListProduct, setListProduct2] = useState([]);

  const [buttonDetailProduct, setbuttonDetailProduct] = useState([]);

  const db = firebase.firestore();
  const getFlowerObject = async () => {
    const data = await db.collection("maria").get();

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

  return (
    <Products
      ListProduct={ListProduct}
      setbuttonDetailProduct={setbuttonDetailProduct}
    />
  );
}
