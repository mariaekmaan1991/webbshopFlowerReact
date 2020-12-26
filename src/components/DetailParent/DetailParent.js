import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firebase } from "../firebase/firebase";
import { Products } from "../ProductsParent/Products/Products";
import { DetailProductPrint } from "./DetailProductPrint/DetailProductPrint";
export function DetailParent() {
  let { id } = useParams();
  const [DetailProductList, setbuttonDetailProductList] = useState([]);
  const [ProductSize, setProductSize] = useState();
  const [ProductQuantity, setProductQuantity] = useState();
  const [ProductId, sethandleProductId] = useState();
  let shoppningCart = [];

  function saveInfo(e) {
    e.preventDefault();
  }

  const db = firebase.firestore();
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(shoppningCart) || []);

    const data = db.collection("maria").doc(id);
    data
      .get()
      .then(function (doc) {
        if (doc.exists) {
          // console.log("Document data:", doc.data());
          let dataProduct = doc.data();
          setbuttonDetailProductList(dataProduct);
        } else {
          console.log("No such document!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  }, []);

  function handleProductSize(e) {
    setProductSize(e.target.value);
  }
  function handleProductQuantity(e) {
    setProductQuantity(e.target.value);
  }

  function handleProduct(idd) {
    console.log(idd);
    let h = {
      id: idd,
      imageUrl: DetailProductList.imageUrl,
      name: DetailProductList.name,
      price: DetailProductList.price,
      Quantity: ProductQuantity,
      size: ProductSize,
    };
    console.log(h);
    shoppningCart.push(h);
  }

  return (
    <DetailProductPrint
      id={id}
      saveInfo={saveInfo}
      //handleProductSize={() => handleProductSize()}
      handleProductSize={handleProductSize}
      DetailProductList={DetailProductList}
      ProductSize={() => ProductSize()}
      handleProduct={handleProduct}
      handleProductQuantity={handleProductQuantity}
      ProductQuantity={ProductQuantity}
      sethandleProductId={() => sethandleProductId()}
    />
  );
}
